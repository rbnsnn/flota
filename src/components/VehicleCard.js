import {
    Card,
    CardContent,
    CardActions,
    Typography,
    Button,
    CardMedia
} from "@mui/material";
import { useState } from 'react';
import carImage from '../car.jpg'
import VehicleDeleteConfirmation from './VechicleDeleteConfirmation';

const VehicleCard = ({ car }) => {

    const [isConfitmationOpen, setConfirmationOpen] = useState(false);

    const handleDialog = () => {
        setConfirmationOpen(false);
    }

    return (

        <Card sx={{
            minWidth: '200px',
            maxWidth: '200px',
            marginTop: '50px'
        }}>
            <CardMedia
                component="img"
                height="200"
                image={carImage}
                alt="fura"
            />
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Company
                </Typography>
                <Typography variant="h4" component="div">
                    {car.brand}
                </Typography>
                <Typography variant="h6" component="div">
                    {car.model}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Rodzaj paliwa: {car.fuelType} <br />
                    Przebieg: {car.course}
                </Typography>
                <Typography variant="body2">
                    Description
                </Typography>
            </CardContent>
            <CardActions sx={{
                justifyContent: 'space-around'
            }}>
                <Button size="large">Edytuj</Button>
                <Button onClick={() => setConfirmationOpen(true)} size="large">Usuń</Button>
            </CardActions>
            <VehicleDeleteConfirmation isOpen={isConfitmationOpen} handleDialog={handleDialog} id={car.id} />
        </Card >


    );
}

export default VehicleCard;