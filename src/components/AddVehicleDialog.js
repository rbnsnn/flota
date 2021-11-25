import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

const AddVehicleDialog = ({ isOpen, handleDialog }) => {

    return (
        <div>
            <Dialog
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