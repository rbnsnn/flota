import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import React from 'react';

import { Link } from 'react-router-dom';

import './ItemList.css';

export const mainItemList = (
    <div>

        <ListItem button component={Link} to="/vechicles">
            <ListItemIcon>
                <DirectionsCarIcon />
            </ListItemIcon>
            <ListItemText primary="Pojazdy" />
        </ListItem>

        <ListItem button component={Link} to="/addvechicle">
            <ListItemIcon>
                <AddCircleOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Dodaj Pojazd" />
        </ListItem>
    </div>
);

