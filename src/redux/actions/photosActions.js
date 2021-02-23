import actionTypes from './types';

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
