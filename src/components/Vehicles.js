import React from 'react';
import { useSelector } from 'react-redux';
import VehicleCard from './VehicleCard';
import { Box } from '@mui/system';

const Vehicles = () => {

    const vehicles = useSelector(store => store.car)

    const vehiclesList = vehicles.map(vehicle =>
    (
        <VehicleCard key={vehicle.id} car={vehicle} />
    )
    )
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '10%',
        }}>
            {vehiclesList}
        </Box>
    )
}

export default Vehicles;