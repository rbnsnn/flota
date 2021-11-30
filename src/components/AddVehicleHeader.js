import React from 'react';

import { Typography } from '@mui/material';
import { Paper } from '@mui/material';


const AddVehicleHeader = () => {
    return (
        <>
            <Paper elevation={0} sx={{
                minHeight: '10vh',
            }}>
                <Typography variant="h2" gutterBottom>
                    Dodaj nowy pojazd
                </Typography>
            </Paper>
        </>
    );
}

export default AddVehicleHeader;