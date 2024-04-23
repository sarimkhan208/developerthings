import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import { Suggestion } from '../pages/Suggestion'
import { Footer } from '../components/Footer'

const MainRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>} ></Route>
      <Route path='/your-suggestion' element={<Suggestion/>} ></Route>
    </Routes>
  )
}

export default MainRoute
