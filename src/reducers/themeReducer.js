import { THEME_CHANGE } from "../actions/appActions"

export const themeReducer = (state = { isDark: true, mode: 'dark' }, action) => {
    switch (action.type) {
        case THEME_CHANGE:
            const isDark = !state.isDark;
            let mode = 'light';

            if (isDark === true) {
                mode = 'dark';
            } else {
                mode = 'light';
            }

            state = {
                isDark,
                mode
            }

            return state;

        default:
            return state;
    }

}