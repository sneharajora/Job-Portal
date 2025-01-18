import React,{useContext} from 'react'
import { AppContext } from './context/AppContext'
import {Route,Routes} from 'react-router-dom'
import ApplyJob from './pages/ApplyJob'
import Applications from './pages/Applications'
import Home from './pages/Home'
import RecruiterLogin from './components/RecruiterLogin'
const App = () => {
  const {showRecruiterLogin} = useContext(AppContext)
   return (
    <div>
       {showRecruiterLogin  && <RecruiterLogin/>}
      <Routes>
        <Route path='/' element={<Home/>}>Home</Route>
        <Route path='/apply-jobs/:id' element={<ApplyJob/>}>Apply</Route>
        <Route path='/applications' element={<Applications/>}></Route>
      </Routes>
    </div>
  )
}

export default App;