import actionTypes from '../actions/types';

const initialState = {
    data: [],
    loading: false,
    error: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PHOTOS_SUCCESS:
            const data = action.payload.page === 1 ? action.payload.data : [...state.data, ...action.payload.data]
            return {
                loading: false,
                error: '',
                data
            };
        case actionTypes.FETCH_PHOTOS_START:
            return {
                ...state,
                loading: true,
                error: ''
            };
        case actionTypes.FETCH_PHOTOS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}
