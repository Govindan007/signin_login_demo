import React from 'react'
import { Button, TextField, Typography } from '@mui/material'

const Login = () => {
  return (
    <div>
      <Typography variant='h1'>Login</Typography>
      <div id="box">
      <TextField variant='outlined' label="email" id="textfield" type='email'/><br /><br />
      <TextField variant='outlined' label="password" id="textfield" type='password'/><br /><br />
      <Button variant='contained' id="button">Submit</Button>

      </div>
    </div>
  )
}

export default Login
