export const ADD_CAR = 'ADD_CAR';
export const THEME_CHANGE = 'THEME_CHANGE';

export const addCar = ({ brand, model, productionYear, course, fuelType, id }) => ({
    type: ADD_CAR,
    payload: {
        brand,
        model,
        productionYear,
        course,
        fuelType,
        id: Math.floor(Math.random() * 999999)
    }
});

export const themeChange = () => ({
    type: THEME_CHANGE,
})

