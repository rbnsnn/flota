export const ADD_CAR = 'ADD_CAR';
export const THEME_CHANGE = 'THEME_CHANGE';
export const DELETE_CAR = 'DELETE_CAR';
export const EDIT_CAR = 'EDIT_CAR'

export const addCar = ({ brand, model, productionYear, course, fuelType }) => ({
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

export const deleteCar = id => ({
    type: DELETE_CAR,
    payload: {
        id
    }
});

export const editCar = ({ brand, model, productionYear, course, fuelType, id }) => ({
    type: EDIT_CAR,
    payload: {
        brand,
        model,
        productionYear,
        course,
        fuelType,
        id,
    }
})

export const themeChange = () => ({
    type: THEME_CHANGE,
})

