import React from 'react';

import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { Typography } from '@mui/material';
import { Paper } from '@mui/material';


const AddVechicleHeader = () => {
    return (
        <>
            <Paper elevation={0} sx={{
                minHeight: '10vh',
                textAlign: 'left'
            }}>
                <Typography variant="h2" gutterBottom component="div">
                    Dodaj nowy pojazd
                </Typography>
            </Paper>
        </>
    );
}

export default AddVechicleHeader;