import './App.css'
import { Routes, Route } from "react-router-dom" 
import Home from './pages/home'
import Reports from './pages/reports'
import Aboutus from './pages/aboutus'
import Contactus from './pages/contactus'


function App() {
   
  return (
    <div className=' '>
      <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="contactus" element={<Contactus />} /> 
          <Route path="/aboutus" element={<Aboutus />} />
      </Routes>
    </div>
  )
}

export default App
