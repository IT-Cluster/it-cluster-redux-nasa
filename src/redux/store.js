import { createStore, applyMiddleware } from 'redux';
import rootReducer from "./reducers";
import reduxThunkMiddleware from 'redux-thunk';
import createSaga from "redux-saga";
import rootSaga from "./sagas";

//залишити якусь одну middleware

//const sagaMiddleware = createSaga();

export default createStore(
    rootReducer,
    applyMiddleware(reduxThunkMiddleware),
    //applyMiddleware(sagaMiddleware)
);

//sagaMiddleware.run(rootSaga);
