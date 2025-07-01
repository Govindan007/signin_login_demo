import React, { useState } from 'react'
import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'

const Signup = () => {
    var [inp, setInp]=useState({email:"", password:""})
    const inputHandler=(e)=>{
        setInp=({...inp,[e.target.name]:e.target.value})
        console.log(inp)
    }
    const submitHandler=()=>{
        axios.post('http://localhost:3004/',inp)
        .then((res)=>{
          console.log(res)
          alert(res.data)
        })
        .catch((err)=>{
          console.log(err)
        })
    }
  return (
    <>
    <div>
      <Typography variant='h1'>Signup</Typography>
      <div id="box">
      <TextField variant='outlined' label="email" value={inp.email} name="email" onChange={inputHandler} type='email'/><br /><br />
      <TextField variant='outlined' label="password" value={inp.password} name="password" onChange={inputHandler} type='password'/><br /><br />
      <Button variant='contained' id="button" onClick={submitHandler}>Submit</Button>

      </div>
    </div>
    </>
  )
}

export default Signup
