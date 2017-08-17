import React, { Component } from 'react';
import { StyleSheet, TouchableHighlight, Image, View, Dimensions } from 'react-native';

export default class PhotosGrid extends Component {
  render() {
    return(
      <View style={styles.containerView}>
        {this.props.photos.map((photo, index) =>
          <TouchableHighlight onPress={() =>  this.props.onClickedPhoto(photo)} key={index}>
            <Image source={{uri: photo.image_url}} style={styles.image} />
          </TouchableHighlight>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerView:  {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  image: {
    flex: 1,
    margin: 7,
    height: (Dimensions.get('window').height / 3) - 25,
    width: (Dimensions.get('window').width / 3) - 15
  }
})
