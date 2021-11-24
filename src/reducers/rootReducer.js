import { combineReducers } from 'redux';

import { carReducer } from './carReducer';
import { themeReducer } from './themeReducer'

export const rootReducer = combineReducers({
    car: carReducer,
    theme: themeReducer,
});