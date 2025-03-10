import React from 'react'
import { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
//---------
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
//----
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
//---------
//DatePicker show thai date
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import 'dayjs/locale/th'; // Import Thai locale
import buddhistEra from 'dayjs/plugin/buddhistEra';
//---------
import { useNavigate } from 'react-router-dom';



function Page01() {
  dayjs.extend(buddhistEra);
  dayjs.locale('th'); // Set the locale globally

  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('Male');
  const [birthDate, setBirthDate] = useState(null); // useState(null); //useState(dayjs(new Date()));
  const [java, setJava] = useState('')
  const [cs, setCs] = useState('C#')
  const [python, setPython] = useState('')

  const navigate = useNavigate();

  
  // const handleClickShowData = () => {
  //   alert(birthDate.format('YYYY-MM-DD') + gender + fullname + java + cs + python)
  // }

  const handleClickShowData = () => {
    if (fullname.length == 0) {
      alert('ตรวจสอบการป้อนชื่อ')
    } else if (age < 0 || age > 120) {
      alert('ตรวจสอบการป้อนอายุ')
    } else if (birthDate == null) {
      alert('ตรวจสอบการป้อนวันเกิด')
    } else {
      //go to Page02 width data that input and select
      navigate('/page02', {
        state: {
          fullname,
          email,
          password,
          age,
          gender,
          birthDate: birthDate.format('YYYY-MM-DD'),
          java,
          cs,
          python,
        },
      });
    }

  };



  return (
    <>
      <TextField
        variant="outlined"
        fullWidth
        label="Fullname"
        id="fullWidth"
        placeholder="ป้อนชื่อ-สกุล"
        onChange={(e) => setFullname(e.target.value)}
        slotProps={{
          inputLabel: { shrink: true },
        }}
        value={fullname}
        helperText='ป้อนเฉพาะตัวอักษรเท่านั้น'
        size='small'
      />
      <br /><br />
      <TextField type='number' fullWidth label="Age" id="fullWidth"
        onChange={(e) => setAge(e.target.value)}
        value={age}
        slotProps={{
          inputLabel: { shrink: true },
        }} />
      <br /><br />
      <TextField
        type='email'
        fullWidth
        label="Email"
        value={email}
        
        id="fullWidth"
        onChange={(e) => setEmail(e.target.value)}
      />
      {/* <TextField type='email' fullWidth label="Email" id="fullWidth" onChange={(e) => setFullname(e.target.value)}
        onBlur={(e) => {
          const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
          if (!emailRegex.test(e.target.value)) {
            alert('Invalid Email Format');
          }
        }}/> */}
      <br /><br />
      <TextField type='password' fullWidth label="Password" id="fullWidth"
        value={password}
        onChange={(e) => setPassword(e.target.value)} />
      <br /><br />
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="Male"
          name="radio-buttons-group"
          onChange={(e) => setGender(e.target.value)}
        >
          <FormControlLabel value="Male" control={<Radio sx={{ '&.Mui-checked': { color: 'green' } }} />} label="ชาย" />
          <FormControlLabel value="Female" control={<Radio sx={{ '&.Mui-checked': { color: 'green' } }} />} label="หญิง" />
          <FormControlLabel value="LGBTQ+" control={<Radio sx={{ '&.Mui-checked': { color: 'green' } }} />} label="LGBTQ+" />
        </RadioGroup>
      </FormControl>
      <br /><br />
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <FormGroup>
          <FormControlLabel value="JAVA" control={<Checkbox sx={{ '&.Mui-checked': { color: 'green' } }}
            onChange={(e) => setJava(e.target.checked ? 'JAVA' : '')} />} label="JAVA" />
          <FormControlLabel value="C#" control={<Checkbox defaultChecked sx={{ '&.Mui-checked': { color: 'green' } }}
            onChange={(e) => setCs(e.target.checked ? 'C#' : '')} />} label="C#" />
          <FormControlLabel value="Python" control={<Checkbox sx={{ '&.Mui-checked': { color: 'green' } }}
            onChange={(e) => setPython(e.target.checked ? 'Python' : '')} />} label="Python" />
        </FormGroup>
      </FormControl>

      <br /><br />


      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en">
        <DatePicker
          label="BirthDate"
          InputLabelProps={{
            shrink: true,
          }}
          value={birthDate}
          onChange={(dateValue) => setBirthDate(dateValue)}
          format="DD MMMM YYYY" // Correct format for Buddhist Era
          slotProps={{ textField: { fullWidth: true }}}
        />
      </LocalizationProvider>
      <br /><br />
      <Button sx={{ border: 1, px: 4, py: 1.5 }} onClick={handleClickShowData}>
        CLICK
      </Button>

    </>

  );
}

export default Page01;
