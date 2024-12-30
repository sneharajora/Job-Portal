import React from 'react'
import {Route,Routes} from 'react-router-dom'
import ApplyJob from './pages/ApplyJob'
import Applications from './pages/Applications'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}>Home</Route>
        <Route path='/apply-job/:id' element={<ApplyJob/>}>Apply</Route>
        <Route path='/applications' element={<Applications/>}></Route>
      </Routes>
    </div>
  )
}

export default App;