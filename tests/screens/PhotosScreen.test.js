import 'react-native';
import React from 'react';
import PhotosScreen from '../../app/screens/PhotosScreen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <PhotosScreen />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
