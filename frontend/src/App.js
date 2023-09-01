import React, { useState } from 'react'
import Login from './Component/Login'
import Register from './Component/Register'
import Details from './Component/Details'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Child from './Component/Child'
import Edit from './Component/Edit'
const App = () => {
 
  return (
    <div>
      <BrowserRouter>
        <Child />
        <Routes>

          <Route element={<Register />} path='register' />
          <Route element={<Login />} path='login' />
          <Route element={<Details />} path='details' />
          <Route element={<Edit/>} path='edit/:id' />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
