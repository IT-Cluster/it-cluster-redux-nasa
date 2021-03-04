import { all } from "redux-saga/effects";
import { watchPhoto } from "./watchers";

export default function* root() {
    yield all([
        watchPhoto()
    ]);
}
