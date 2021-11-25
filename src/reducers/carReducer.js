import {
    ADD_CAR, DELETE_CAR, EDIT_CAR
} from '../actions/appActions';

export const carReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_CAR:
            return [...state, action.payload];

        case DELETE_CAR:
            return state.filter(currentStateElement => currentStateElement.id !== action.payload.id);

        case EDIT_CAR:
            return state;
        default:

            return state;
    }
}