import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import { useDispatch } from 'react-redux';
import { editCar } from '../actions/appActions';



const VehicleEdit = ({ isOpen, handleDialog, id }) => {

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    const dispatch = useDispatch();

    const handleEdit = id => {
        dispatch(editCar(id))
        handleDialog()
    }

    return (
        <div>
            <Dialog
                open={isOpen}
                onClose={handleDialog}
                TransitionComponent={Transition}
                keepMounted
                fullWidth
                maxWidth="md"

                aria-describedby="AddVehicle-dialog-description"
            >
                <DialogContent id="AddVehicle-dialog-description">
                    Edytuj pojazd
                </DialogContent>

                <DialogActions>

                    <Button onClick={() => handleEdit(id)} autoFocus sx={{ color: 'green' }
                    }>
                        Zapisz zmiany
                    </Button>
                    <Button onClick={handleDialog} autoFocus>
                        Anuluj
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default VehicleEdit