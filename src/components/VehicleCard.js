import { useDispatch } from 'react-redux';
import {
    Card,
    CardContent,
    CardActions,
    Typography,
    Button,
    CardMedia
} from "@mui/material";
import { deleteCar } from "../actions/appActions";
import carImage from '../car.jpg'

const VehicleCard = ({ car }) => {

    const dispatch = useDispatch();

    const handleDelete = id => {
        dispatch(deleteCar(id))
    }

    return (
        <Card sx={{
            maxWidth: '20%',
            marginTop: '50px'
        }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Stimo
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
                    zapierdala az milutko
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => handleDelete(car.id)} size="small">Usuń</Button>
            </CardActions>
            <CardMedia
                component="img"
                height="200"
                image={carImage}
                alt="fura"
            />
        </Card >
    );
}

export default VehicleCard;