import { combineReducers } from 'redux';

import { appReducer } from './appReducer';
import { themeReducer } from './themeReducer'

export const rootReducer = combineReducers({
    form: appReducer,
    theme: themeReducer,
});