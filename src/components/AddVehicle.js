import React, { useState } from 'react';
import AddVehicleDialog from './AddVehicleDialog';
import ValidationDialog from './ValidationDialog';
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
    const [isValidationDialogOpen, setValidationDialogOpen] = useState(false);

    const [isBrandValid, setBrandValid] = useState(false)
    const [isModelValid, setModelValid] = useState(false);
    const [isCourseValid, setCourseValid] = useState(false)

    const handleBrandValid = e => {
        if (e.target.value === '') {
            setBrandValid(true)
        } else {
            setBrandValid(false)
        }
    }

    const handleModelValid = e => {
        if (e.target.value === '') {
            setModelValid(true)
        } else {
            setModelValid(false)
        }
    }

    const handleCourseValid = e => {
        if (e.target.value === '') {
            setCourseValid(true)
        } else {
            setCourseValid(false)
        }
    }

    const handleBrandChange = e => {
        setCarBrand(e.target.value);
    }

    const handleModelChange = e => {
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
    }

    const handleSubmit = () => {

        if (carBrand.length === 0 || carModel.length === 0 || carCourse.length === 0) {
            if (carBrand.length === 0) {
                setBrandValid(true)
            }
            if (carModel.length === 0) {
                setModelValid(true)
            }
            if (carCourse.length === 0) {
                setCourseValid(true)
            }
            setValidationDialogOpen(true)
            return
        }
        const car = {
            brand: carBrand,
            model: carModel,
            productionYear: carProductionYear,
            course: carCourse,
            fuelType: carFuelType,
            id,
        }

        setCarBrand('');
        setCarModel('');
        setCarProductionYear(currentDate);
        setCarCourse('');
        setCarFuelType('Inne');
        setDialogOpen(true);

        dispatch(addCar(car));
    }

    const handleDialog = () => {
        setDialogOpen(false);
    }

    const handleValidationDialog = () => {
        setValidationDialogOpen(false);
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
                            required
                            id="carBrand"
                            value={carBrand}
                            onChange={handleBrandChange}
                            onBlur={handleBrandValid}
                            error={isBrandValid}
                            placeholder="Marka"
                            label="Marka pojazdu"
                            variant="outlined"
                        />
                        <TextField
                            required
                            id="carModel"
                            value={carModel}
                            onChange={handleModelChange}
                            onBlur={handleModelValid}
                            error={isModelValid}
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
                            required
                            id="carCourse"
                            value={carCourse}
                            onChange={handleCarCourseChange}
                            onBlur={handleCourseValid}
                            error={isCourseValid}
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
                                <FormControlLabel value="Diesel" control={<Radio />} label="Diesel" />
                                <FormControlLabel value="Benzyna" control={<Radio />} label="Benzyna" />
                                <FormControlLabel checked value="Inne" control={<Radio />} label="Inne" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                </Grid>
                <Button onClick={handleSubmit} variant="contained">Dodaj pojazd</Button>
                <AddVehicleDialog isOpen={isDialogOpen} handleDialog={handleDialog} />
                <ValidationDialog isOpen={isValidationDialogOpen} handleDialog={handleValidationDialog} />
            </Paper>
        </Box>
    );
}

export default AddVehicle;