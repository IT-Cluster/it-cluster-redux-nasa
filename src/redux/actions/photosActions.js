import actionTypes from './types';
import store from "../store";
import { getPhotos } from "../../api/photosApi";

export const getPhotosSuccess = payload => ({
    type: actionTypes.FETCH_PHOTOS_SUCCESS,
    payload
});

export const getPhotosStart = () => ({
    type: actionTypes.FETCH_PHOTOS_START
});

export const getPhotosError = payload => ({
    type: actionTypes.FETCH_PHOTOS_ERROR,
    payload
});

//в залежності що викликається в PhotosList компоненті буде виконуватись один з цих екшинів

export const getPhotosSaga = payload => ({
    type: actionTypes.FETCH_PHOTOS_SAGA,
    payload
});

export const getPhotosThunk = ({ page, date }) => {
    return dispatch => {
        dispatch(getPhotosStart());
        getPhotos(page, date)
            .then(res => res.json())
            .then(res => {
                store.dispatch(getPhotosSuccess({data: res.photos, page}));
            })
            .catch(error => {
                console.log(error);
                store.dispatch(getPhotosError(error.message));
            });
    };
};

