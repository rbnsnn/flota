import React from 'react';
import { useSelector } from 'react-redux';
import VehicleCard from './VehicleCard';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';



const Vehicles = () => {

    const vehicles = useSelector(store => store.car)
    console.log(vehicles)

    const vehiclesList = vehicles.map(vehicle =>
    (
        <VehicleCard key={vehicle.id} car={vehicle} />
    )
    )

    const vehiclesListEmpty = (
        <Typography variant="h2">Brak pojazdów w bazie danych</Typography>
    )

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '10%',
        }}>
            {(vehicles.length === 0) ? vehiclesListEmpty : vehiclesList}
        </Box>
    )
}

export default Vehicles;