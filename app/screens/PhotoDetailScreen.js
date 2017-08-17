import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';

export default class PhotosScreen extends Component {
  static navigationOptions = {
    title: 'Photo Detail',
  };

  render() {
    const { params } = this.props.navigation.state;

    return(
      <Image source={{uri: params.photo.image_url}} style={styles.image} />
    )
  }
}


const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover'
  },
})
