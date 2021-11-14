import { THEME_CHANGE } from "../actions/appActions"

export const themeReducer = (state = { isDark: false, mode: 'light' }, action) => {
    switch (action.type) {
        case THEME_CHANGE:
            console.log('dziala');

            const isDark = !state.isDark;
            let mode = 'light';

            if (isDark === true) {
                mode = 'dark';
            } else {
                mode = 'light';
            }

            console.log(state)

            state = {
                isDark,
                mode
            }


            return state;


        default:

            return state;
    }

}