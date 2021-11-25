import React, { useState } from 'react';

import AddVehicleDialog from './AddVehicleDialog';

import { useDispatch } from 'react-redux';

import { addCar } from '../actions/appActions';

import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { Box } from '@mui/system';
import { TextField } from '@mui/material';
import { DatePicker } from '@mui/lab';
import { LocalizationProvider } from '@mui/lab';
import { FormLabel } from '@mui/material';
import { RadioGroup } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { Radio } from '@mui/material';
import { FormControl } from '@mui/material';
import { Grid } from '@mui/material';
import { Paper } from '@mui/material';
import { Button } from '@mui/material';




const AddVehicle = ({ id }) => {
    const dispatch = useDispatch();
    const currentDate = new Date();
    const minimumDate = new Date(1990, 1);

    const [carBrand, setCarBrand] = useState('');
    const [carModel, setCarModel] = useState('');
    const [carProductionYear, setCarProductionYear] = useState(currentDate);
    const [carCourse, setCarCourse] = useState('');
    const [carFuelType, setCarFuelType] = useState('');
    const [isDialogOpen, setDialogOpen] = useState(false);
    const [isValid, setValid] = useState(false);

    const handleBrandChange = e => {

        setCarBrand(e.target.value);
    }

    const handleModelChange = e => {

        if (e.target.value.length === 0) setValid(true);
        setCarModel(e.target.value);
    }

    const handleCarProductionYearChange = e => {

        setCarProductionYear(e);
    }

    const handleCarCourseChange = e => {

        if (e.target.value.length > 6) {
            return
        }
        else if (carCourse === 0) {
            setCarCourse('')
        } else {
            setCarCourse(Number(e.target.value))
        }
    }

    const handleCarFuelTypeChange = e => {

        setCarFuelType(e.target.value);
        console.log(carFuelType);
    }

    const handleSubmit = () => {

        const productionYear = carProductionYear.getFullYear().toString()

        const car = {
            brand: carBrand,
            model: carModel,
            productionYear,
            course: carCourse,
            fuelType: carFuelType,
            id,
        }

        setCarBrand('');
        setCarModel('');
        setCarProductionYear(currentDate);
        setCarCourse('');
        setCarFuelType('');
        setDialogOpen(true);

        dispatch(addCar(car));
    }

    const handleDialog = () => {
        setDialogOpen(false);
    }

    return (
        <Box component="form"
            sx={
                {
                    '& .MuiTextField-root': {
                        m: 1,
                        width: '80%',
                        marginTop: '2ch',

                    },
                    '& .MuiFormControl-root': {
                        m: 1,
                        width: '80%',
                        marginTop: '2ch',

                    },

                    '& .MuiFormLabel-root': {
                        textAlign: 'left',
                    },
                    '& .MuiButton-root': {
                        m: 1,
                        width: '30%',
                        marginBottom: '2ch',

                    }

                }

            }
            noValidate autoComplete="off" >
            <Paper elevation={3} >

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            id="carBrand"
                            value={carBrand}
                            onChange={handleBrandChange}
                            placeholder="Marka"
                            label="Marka pojazdu"
                            variant="outlined"

                        />

                        <TextField
                            id="carModel"
                            value={carModel}
                            onChange={handleModelChange}
                            error={isValid}
                            placeholder="Model"
                            label="Model pojazdu"
                            variant="outlined"
                        />

                    </Grid>
                    <Grid item xs={6}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                id="carProductionYear"
                                views={['year']}
                                label="Rok produkcji"
                                value={carProductionYear}
                                onChange={handleCarProductionYearChange}
                                maxDate={currentDate}
                                minDate={minimumDate}
                                renderInput={(params) => <TextField {...params} helperText={null} />} />
                        </LocalizationProvider>


                        <TextField
                            id="carCourse"
                            value={carCourse}
                            onChange={handleCarCourseChange}
                            type="number"
                            placeholder="Przebieg"
                            label="Przebieg pojazdu"
                            variant="outlined"
                            pattern="\d*"
                            inputProps={{
                                min: 0,
                                maxLength: 6,
                            }}

                        />
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Rodzaj paliwa</FormLabel>
                            <RadioGroup onChange={handleCarFuelTypeChange} value={carFuelType} row aria-label="fuelType" name="fuelType">
                                <FormControlLabel value="diesel" control={<Radio />} label="Diesel" />
                                <FormControlLabel value="gas" control={<Radio />} label="Benzyna" />
                                <FormControlLabel value="other" control={<Radio />} label="Inne" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                </Grid>
                <Button onClick={handleSubmit} variant="contained">Dodaj pojazd</Button>
                <AddVehicleDialog isOpen={isDialogOpen} handleDialog={handleDialog} />
            </Paper>
        </Box>
    );
}

export default AddVehicle;