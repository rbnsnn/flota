import React, { useState, forwardRef } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useDispatch } from 'react-redux';
import { deleteCar } from '../actions/appActions';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const VehicleDelete = ({ id }) => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    const handleDelete = id => {
        dispatch(deleteCar(id))
        handleClose()
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true)
    }

    return (
        <>
            <Button variant="outlined" onClick={handleOpen}>
                Usuń
            </Button>
            <Dialog
                TransitionComponent={Transition}
                keepMounted
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>
                    Czy na pewno chcesz usunąć pojazd?
                </DialogTitle>
                <DialogContent>
                    Po zatwierdzeniu wszystkie dane dotyczące tego pojazdu zostaną bez powrotnie usunięte
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={() => handleDelete(id)} sx={{ color: 'red' }}>Usuń</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default VehicleDelete