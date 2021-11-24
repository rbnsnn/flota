import {
    ADD_CAR,
} from '../actions/appActions';

export const carReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_CAR:
            return [...state, action.payload];


        default:

            return state;
    }
}