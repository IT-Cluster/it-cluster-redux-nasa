import { takeEvery } from "redux-saga/effects";
import actionTypes from "../actions/types";
import { fetchPhotosSaga } from './photosSaga';

export function* watchPhoto() {
    yield takeEvery(actionTypes.FETCH_PHOTOS_SAGA, fetchPhotosSaga);
}
