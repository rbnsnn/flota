import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import React from 'react';

export const mainItemList = (
    <div>
        <ListItem>
            <ListItemIcon>
                <DirectionsCarIcon />
            </ListItemIcon>
            <ListItemText primary="Pojazdy" />
        </ListItem>
    </div> 
);
 
