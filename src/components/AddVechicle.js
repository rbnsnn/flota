import React, { useState } from 'react';

import { Box } from '@mui/system';
import { TextField } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { DatePicker } from '@mui/lab';
import { LocalizationProvider } from '@mui/lab';

const AddVechicle = () => {

  const [carBrand, setCarBrand] = useState('');
  const [carModel, setCarModel] = useState('');
  const [carProductionYear, setCarProductionYear] = useState(new Date());
  const [carCourse, setCarCourse] = useState('');

  const handleBrandChange = e => {
      
      setCarBrand(e.target.value);
  }

  const handleModelChange = e => {

      setCarModel(e.target.value);
  }

  const handleCarProductionYearChange = e => {
    setCarProductionYear(e)

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
      label="Model pojazdu" 
      variant="outlined"
      InputLabelProps={{
              shrink: true,
            }}/>
   <LocalizationProvider dateAdapter={AdapterDateFns}>
    <DatePicker
          id="carProductionYear"
          views={['year']}
          label="Rok produkcji"
          value={carProductionYear}
          onChange={handleCarProductionYearChange}
          renderInput={(params) => <TextField {...params} helperText={null} />}/>
    </LocalizationProvider>


    <TextField 
      id="carCourse"
      value={carCourse}
      onChange={handleCarCourseChange}
      required
      placeholder="Przebieg"
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