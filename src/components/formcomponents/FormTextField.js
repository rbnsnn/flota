import React from 'react';
import { TextField } from '@mui/material';


const FormTextField = ({ value, id }) => {

    return (
        <TextField
            id={id}
            value={value}
            required
            placeholder="Marka"
            label="Marka pojazdu"
            variant="outlined"
            InputLabelProps={{
                shrink: true,
            }} />);
}

export default FormTextField;