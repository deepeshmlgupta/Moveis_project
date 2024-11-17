import React from 'react'
import Movies from './pages/Movies/Movies'
import {Routes, Route} from 'react-router-dom'
import SignIn from './pages/SignIn/SignIn'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Movies/>}/>
        <Route path='/SignIn' element={<SignIn/>}/>
      </Routes>
    </div>
  )
}

export default App 