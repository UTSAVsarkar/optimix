import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function Form() {
  const inputStyles = {
    color: 'white',
    '&:before': {
      borderBottom: '1px solid white',
    },
    '&:after': {
      borderBottom: '2px solid white',
    },
    '&:hover:not(.Mui-disabled):before': {
      borderBottom: '1px solid white',
    },
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: '100%',
        maxWidth: 600,
        mx: 'auto',
      }}
      noValidate
      autoComplete="off"
    >

    <center><h3>Set an Introductory Meeting</h3></center>

      <Box sx={{ display: 'flex', gap: 2 }}>
        <TextField
          required
          label="First Name"
          variant="standard"
          fullWidth
          InputLabelProps={{ sx: { color: 'white' } }}
          InputProps={{
            sx: inputStyles,
          }}
        />
        <TextField
          required
          label="Last Name"
          variant="standard"
          fullWidth
          InputLabelProps={{ sx: { color: 'white' } }}
          InputProps={{
            sx: inputStyles,
          }}
        />
      </Box>

      <Box sx={{ display: 'flex', gap: 2 }}>
        <TextField
          required
          label="Email"
          variant="standard"
          fullWidth
          InputLabelProps={{ sx: { color: 'white' } }}
          InputProps={{
            sx: inputStyles,
          }}
        />
        <TextField
          required
          label="Phone Number"
          variant="standard"
          fullWidth
          InputLabelProps={{ sx: { color: 'white' } }}
          InputProps={{
            sx: inputStyles,
          }}
        />
      </Box>

      <TextField
        label="Subject"
        multiline
        rows={1}
        variant="standard"
        fullWidth
        InputLabelProps={{ sx: { color: 'white' } }}
        InputProps={{
          sx: inputStyles,
        }}
      />
<Button
  variant="outlined"
  sx={{
    color: 'white',
    borderColor: 'white',
    '&:hover': {
      borderColor: 'white',
      backgroundColor: 'rgba(255, 255, 255, 0.1)', // optional hover effect
    },
  }}
>
  Submit
</Button>
    </Box>
  );
}