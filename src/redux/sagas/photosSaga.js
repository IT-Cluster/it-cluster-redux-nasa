import { put, call } from "redux-saga/effects";
import { getPhotosStart, getPhotosSuccess, getPhotosError } from "../actions/photosActions";
import { getPhotos } from "../../api/photosApi"

export function* fetchPhotosSaga(action) {
    console.log(action);
    const { page, date } = action.payload;
    try {
        yield put(getPhotosStart());
        const response = yield call(() =>
            getPhotos(page, date)
                .then(res => res.json())
        );
        yield put(getPhotosSuccess({data: response.photos, page}));
    } catch (error) {
        yield put(getPhotosError(error));
    }
}
