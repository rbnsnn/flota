export const ADD = 'ADD';
export const THEME_CHANGE = 'THEME_CHANGE';

export const addRate = ({ author, comment, rate }) => ({
    type: ADD,
    payload: {
        author,
        comment,
        id: Math.floor(Math.random() * 1234),
        rate,
    }
});

export const themeChange = () => ({
    type: THEME_CHANGE,
})

