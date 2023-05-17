import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import { Home, ExerciseDetail } from './mains/export'
import { Navbar, Footer } from './components/export';


import './App.css'

const App = () => {
  return (
    <Box witdth='400px' sx={{width: { xl: '1488px  '}}} m="auto">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App