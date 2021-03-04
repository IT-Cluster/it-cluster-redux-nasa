import { select } from "redux-saga/effects";

export function* loggerSaga(action) {
    const state = yield select();
    console.log('action', action);
    console.log('state after', state);
}
