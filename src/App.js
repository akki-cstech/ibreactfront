import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../src/Components/Home/Home' ;

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />

        </Routes>

      </BrowserRouter>
      
    </>
  )
}

export default App
