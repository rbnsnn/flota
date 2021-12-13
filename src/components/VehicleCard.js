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
import VehicleDelete from './VechicleDelete';
import VehicleEdit from './VehicleEdit';

const VehicleCard = ({ car }) => {

    const [isDeleteOpen, setDeleteOpen] = useState(false);
    const [isEditOpen, setEditOpen] = useState(false);

    const handleDeleteDialog = () => {
        setDeleteOpen(false);
    }

    const handleEditDialog = () => {
        setEditOpen(false);
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
                <Button onClick={() => setEditOpen(true)} size="large">Edytuj</Button>
                <Button onClick={() => setDeleteOpen(true)} size="large">Usuń</Button>
            </CardActions>
            <VehicleEdit isOpen={isEditOpen} handleDialog={handleEditDialog} id={car.id} />
            <VehicleDelete isOpen={isDeleteOpen} handleDialog={handleDeleteDialog} id={car.id} />
        </Card >


    );
}

export default VehicleCard;