import 'react-native';
import React from 'react';
import PhotoDetailScreen from '../../app/screens/PhotoDetailScreen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <PhotoDetailScreen navigation={ {state: { params: { photo: { image_url: "https://image.jpeg" }}} }} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
