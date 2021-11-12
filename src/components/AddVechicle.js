import React, { useState } from 'react';

import { Box } from '@mui/system';
import { TextField } from '@mui/material';

const AddVechicle = () => {

  const [carBrand, setCarBrand] = useState('');
  const [carModel, setCarModel] = useState('');
  const [carProductionYear, setProductionYear] = useState('');
  const [carCourse, setCarCourse] = useState('');

  const handleBrandChange = e => {
      
      setCarBrand(e.target.value);
  }

  const handleModelChange = e => {

      setCarModel(e.target.value);
  }

  const handleCarProductionYearChange = e => {


  }

  const handleCarCourseChange = e => {

    if (carCourse === 0) {
      setCarCourse('')
    } else{
      setCarCourse(Number(e.target.value))
    }
  }



  return ( 
    <Box component = "form"
    sx = {
      {
        '& .MuiTextField-root': {
          m: 1,
          width: '25ch',
          marginTop: '2ch'
        },
      }
    }
    noValidate autoComplete = "off" >
    
    <div>
    <TextField 
      id="carBrand"
      value={carBrand}
      onChange={handleBrandChange}
      required
      placeholder="Marka"
      id="outlined-basic"
      label="Marka pojazdu" 
      variant="outlined"
      InputLabelProps={{
              shrink: true,
            }}/>

    <TextField 
      id="carModel"
      value={carModel}
      onChange={handleModelChange}
      required
      placeholder="Model"
      id="outlined-basic"
      label="Model pojazdu" 
      variant="outlined"
      InputLabelProps={{
              shrink: true,
            }}/>

    <TextField 
      id="carProductionYear"
      required
      placeholder="Rok"
      id="outlined-basic"
      label="Rok produkcji" 
      variant="outlined"
      type="date"
      InputLabelProps={{
              shrink: true,
            }}/>

    <TextField 
      id="carCourse"
      value={carCourse}
      onChange={handleCarCourseChange}
      required
      placeholder="Przebieg"
      id="outlined-basic"
      label="Przebieg pojazdu" 
      variant="outlined"
      pattern="\d*"
      InputLabelProps={{
              shrink: true,
            }}
    
      inputProps={{
            min: 0,
            maxLength: 6,
        }}

            />
      
   
    </div>

    </Box>
  );
}

export default AddVechicle;