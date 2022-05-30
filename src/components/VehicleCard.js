import {
    Card,
    CardContent,
    CardActions,
    Typography,
    CardMedia
} from "@mui/material"
import carImage from '../car.jpg'
import VehicleDelete from './VechicleDelete'
import VehicleEdit from './VehicleEdit'

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
                <Typography color="text.secondary">
                    Rodzaj paliwa: {car.fuelType} <br />
                </Typography>
                <Typography color="text.secondary">
                    Przebieg: {car.course}
                </Typography>
                <Typography color="text.secondary">
                    Rocznik: {car.productionYear.getFullYear().toString()}
                </Typography>
                <Typography variant="body2">
                    Opis
                </Typography>
            </CardContent>
            <CardActions sx={{
                justifyContent: 'space-around'
            }}>
                <VehicleEdit car={car} />
                <VehicleDelete id={car.id} />
            </CardActions>
        </Card >
    );
}
export default VehicleCard;