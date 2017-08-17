import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableHighlight, Image, Dimensions } from 'react-native';
import { SearchBar } from 'react-native-elements';

import PhotosGrid from '../components/PhotosGrid';
import PhotosApi from '../services/PhotosApi';

const PHOTO_API_CONSUMER_KEY = "9t4nuIALhDuQCbwLRKXOofBJ2kRIC0YECWsEMuHD"
const PHOTO_API_SEARCH_URL = `https://api.500px.com/v1/photos/search?consumer_key=${PHOTO_API_CONSUMER_KEY}&image_size=600`;

export default class PhotosScreen extends Component {
  static navigationOptions = {
    title: 'Photos',
  };

  constructor(props) {
    super(props)
    this.state = {
      photos: []
    }

    this.searchPhotos = this.searchPhotos.bind(this)
    this.viewPhoto = this.viewPhoto.bind(this)
  };

  searchPhotos(term) {
    const that = this

    PhotosApi
      .searchPhotos(term)
      .then((responseJson) => {
        that.setState({
          photos: responseJson.photos
        })
      })
      .catch((error) => {
        console.error(error)
      });
  };

  viewPhoto(photo) {
    const { navigate }  = this.props.navigation
    navigate('PhotoDetail', { photo: photo })
  };

  render() {
    let photos = <Text style={styles.noPhotos}>No Photos</Text>

    if (this.state.photos.length > 0) {
      photos = <PhotosGrid photos={this.state.photos} onClickedPhoto={this.viewPhoto}/>
    }

    return(
      <ScrollView style={styles.scrollView}>
        <SearchBar
          round
          lightTheme
          onChangeText={this.searchPhotos}
          placeholder='Search Photos'/>

        <View style={styles.containerView}>
          { photos }
        </View>
      </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
  scrollView: {},
  containerView:  {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  noPhotos: {
  }
})
