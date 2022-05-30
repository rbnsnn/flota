import React, { useState, forwardRef } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { editCar } from '../actions/appActions';
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { DatePicker } from '@mui/lab';
import { LocalizationProvider } from '@mui/lab';
import { FormLabel } from '@mui/material';
import { RadioGroup } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { Radio } from '@mui/material';
import { FormControl } from '@mui/material';
import { Grid } from '@mui/material';



const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const VehicleEdit = ({ car: vehicle }) => {
    const [open, setOpen] = useState(false);
    const currentDate = new Date();
    const minimumDate = new Date(1990, 1);

    const dispatch = useDispatch();

    const [carBrand, setCarBrand] = useState(vehicle.brand);
    const [carModel, setCarModel] = useState(vehicle.model);
    const [carProductionYear, setCarProductionYear] = useState(vehicle.productionYear);
    const [carCourse, setCarCourse] = useState(vehicle.course);
    const [carFuelType, setCarFuelType] = useState(vehicle.fuelType);


    const handleEdit = id => {
        console.log('edit')
        const car = {
            brand: carBrand,
            model: carModel,
            productionYear: carProductionYear,
            course: carCourse,
            fuelType: carFuelType,
            id,
        }
        dispatch(editCar(car))
        handleClose()
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true)
    }

    const handleBrandChange = (e) => {
        setCarBrand(e.target.value)
    }

    const handleModelChange = (e) => {
        setCarModel(e.target.value)
    }

    const handleProductionYearChange = (e) => {
        setCarProductionYear(e.target.value)
    }

    const handleCourseChange = (e) => {
        setCarCourse(e.target.value)
    }

    const handleFuelTypeChange = (e) => {
        setCarFuelType(e.target.value)
    }

    return (
        <>
            <Button variant="outlined" onClick={handleOpen}>
                Edytuj
            </Button>
            <Dialog
                TransitionComponent={Transition}
                keepMounted
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>
                    Edycja pojazdu o id: {vehicle.id}
                </DialogTitle>
                <DialogContent>
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
                                    onChange={handleProductionYearChange}
                                    maxDate={currentDate}
                                    minDate={minimumDate}
                                    renderInput={(params) => <TextField {...params} helperText={null} />} />
                            </LocalizationProvider>


                            <TextField
                                id="carCourse"
                                value={carCourse}
                                onChange={handleCourseChange}
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
                                <RadioGroup onChange={handleFuelTypeChange} value={carFuelType} row aria-label="fuelType" name="fuelType">
                                    <FormControlLabel value="Diesel" control={<Radio />} label="Diesel" />
                                    <FormControlLabel value="Benzyna" control={<Radio />} label="Benzyna" />
                                    <FormControlLabel value="Inne" control={<Radio />} label="Inne" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                    </Grid>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={() => handleEdit(vehicle.id)} sx={{ color: 'green' }}>Potwierdź</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default VehicleEdit