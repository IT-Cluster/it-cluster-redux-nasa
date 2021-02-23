import store from "../redux/store";
import { getPhotosSuccess, getPhotosStart, getPhotosError } from "../redux/actions/photosActions";

export const getPhotos = (page = 1, date) => {
    const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?&api_key=7niVtOpqCrIelskkO8wVI0yfyApdN9d0jqJpI40w';
    store.dispatch(getPhotosStart());
    fetch(`${url}&page=${page}&earth_date=${date}`)
        .then(res => res.json())
        .then(res => {
            store.dispatch(getPhotosSuccess({data: res.photos, page}));
        })
        .catch(error => {
            console.log(error);
            store.dispatch(getPhotosError(error.message));
        });
}
