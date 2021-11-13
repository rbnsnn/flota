import React, { useState } from 'react';

import { Box } from '@mui/system';
import { TextField } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { DatePicker } from '@mui/lab';
import { LocalizationProvider } from '@mui/lab';
import { FormLabel } from '@mui/material';
import { RadioGroup } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { Radio } from '@mui/material';
import { FormControl } from '@mui/material';


const AddVechicle = () => {

  const currentDate = new Date();
  const minimumDate = new Date(1990, 1);

  const [carBrand, setCarBrand] = useState('');
  const [carModel, setCarModel] = useState('');
  const [carProductionYear, setCarProductionYear] = useState(currentDate);
  const [carCourse, setCarCourse] = useState('');
  const [carFuelType, setCarFuelType] = useState('');

  const handleBrandChange = e => {
      
      setCarBrand(e.target.value);
  }

  const handleModelChange = e => {

      setCarModel(e.target.value);
  }

  const handleCarProductionYearChange = e => {
    
    setCarProductionYear(e);
  }

  const handleCarCourseChange = e => {

    if (carCourse === 0) {
      setCarCourse('')
    } else{
      setCarCourse(Number(e.target.value))
    }
  }

  const handleCarFuelTypeChange = e => {
    
    setCarFuelType(e.target.value);
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
          maxDate={currentDate}
          minDate={minimumDate}
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
 <FormControl component="fieldset">
  <FormLabel component="legend">Gender</FormLabel>
  <RadioGroup aria-label="gender" name="row-radio-buttons-group">
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="other" control={<Radio />} label="Other" />
 
  </RadioGroup>
</FormControl>
   
    </div>

    </Box>
  );
}

export default AddVechicle;