import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './components/Signup'
import { Route, Routes } from 'react-router-dom'
import { Typography } from '@mui/material'
import Login from './components/Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/l" element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
