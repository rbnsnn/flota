import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import { useDispatch } from 'react-redux';
import { deleteCar } from '../actions/appActions';



const VehicleDelete = ({ isOpen, handleDialog, id }) => {

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });
    const dispatch = useDispatch();

    const handleDelete = id => {
        dispatch(deleteCar(id))
        handleDialog()
    }

    return (
        <div>
            <Dialog
                open={isOpen}
                onClose={handleDialog}
                TransitionComponent={Transition}
                keepMounted
                aria-describedby="AddVehicle-dialog-description"
            >
                <DialogContent id="AddVehicle-dialog-description">
                    Czy na pewno chcesz usunąć pojazd?
                </DialogContent>

                <DialogActions>

                    <Button onClick={() => handleDelete(id)} autoFocus sx={{ color: 'red' }
                    }>
                        Usuń
                    </Button>
                    <Button onClick={handleDialog} autoFocus>
                        Anuluj
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default VehicleDelete