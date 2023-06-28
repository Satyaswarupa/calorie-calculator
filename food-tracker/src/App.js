import React from 'react'
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import Calorieintake from './Calorieintake'
import Calorieburned from './Calorieburned'
import Header from './layer/Header'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Calorieintake />} />
        <Route path='/calorieburned' element={<Calorieburned />} />
      </Routes>
    </Router>
  )
}

export default App
