import {
    Card,
    CardContent,
    CardActions,
    Typography,
    CardMedia
} from "@mui/material";
import carImage from '../car.jpg'
import VehicleDelete from './VechicleDelete';

const VehicleCard = ({ car }) => {
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
                {/* <VehicleEdit id={car.id} /> */}
                <VehicleDelete id={car.id} />
            </CardActions>
        </Card >
    );
}
export default VehicleCard;