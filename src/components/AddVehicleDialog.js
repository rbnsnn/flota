import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { forwardRef } from 'react';
import { Slide } from '@mui/material';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const AddVehicleDialog = ({ isOpen, handleDialog }) => {

    return (
        <div>
            <Dialog
                TransitionComponent={Transition}
                keepMounted
                open={isOpen}
                onClose={handleDialog}
                aria-describedby="AddVehicle-dialog-description"
            >
                <DialogContent id="AddVehicle-dialog-description">
                    Pomyślnie dodano pojazd do bazy danych.
                </DialogContent>

                <DialogActions>

                    <Button onClick={handleDialog} autoFocus>
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AddVehicleDialog