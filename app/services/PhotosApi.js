const PHOTO_API_CONSUMER_KEY = "9t4nuIALhDuQCbwLRKXOofBJ2kRIC0YECWsEMuHD"
const PHOTO_API_SEARCH_URL = `https://api.500px.com/v1/photos/search?consumer_key=${PHOTO_API_CONSUMER_KEY}&image_size=600`;

export default class PhotosApi {
  static searchPhotos(term) {
    const that = this
    return fetch(`${PHOTO_API_SEARCH_URL}&term=${term}`)
      .then((response) => response.json())
  };
}
