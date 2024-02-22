import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../pages/Homepage'

const MainRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>} ></Route>
    </Routes>
  )
}

export default MainRoute
