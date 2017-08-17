import React from 'react';
import { StackNavigator } from 'react-navigation';
import PhotosScreen from './app/screens/PhotosScreen';
import PhotoDetailScreen from './app/screens/PhotoDetailScreen';

const AppNavigator = StackNavigator({
  Photos: { screen: PhotosScreen },
  PhotoDetail: { screen: PhotoDetailScreen }
});

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator ref={nav => { this.navigator = nav; }} />
    );
  }
}
