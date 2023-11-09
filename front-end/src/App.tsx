
import './App.css'
import ForecastReportManagement from './components/ForecastReportManagement'
import Navbar from './components/Navbar'
import WeatherForecast from './components/WeatherForecast'

function App() {
   
  return (
    <>
       <Navbar />
       <WeatherForecast />
       <ForecastReportManagement />
    </>
  )
}

export default App
