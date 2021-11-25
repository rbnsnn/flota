import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useDispatch } from 'react-redux';
import { deleteCar } from '../actions/appActions';

const VehicleDeleteConfirmation = ({ isOpen, handleDialog, id }) => {

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

export default VehicleDeleteConfirmation