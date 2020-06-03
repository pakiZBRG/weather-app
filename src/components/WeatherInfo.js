import React, {useContext} from "react"
import Context from '../Context'
import {Link} from 'react-router-dom'

const WeatherInfo = () => {
   const {weather, city, wind, desc} = useContext(Context)
   const {temp, humidity, pressure} = weather
   return (
      <div className="weather-data">
      <p className="weather_tagline">Weather forecast for <span className="weather-data_city">{city}</span></p>
      View <Link to='/5day' className='weather-data_5day'> 5day </Link> forecast
         <div className="weather-data_box">
            <span className="weather-data_property">
               <p className="weather-data_title">Temperature</p>
               <p className="weather-data_value">{temp.toFixed(1)}<span className='weather-data_measure'>°C</span></p>
            </span>
            <span className="weather-data_property">
               <p className="weather-data_title">Humidity</p>
               <p className="weather-data_value">{humidity}<span className='weather-data_measure'>%</span></p>
            </span>
            <span className="weather-data_property">
               <p className="weather-data_title">Wind speed</p>
               <p className="weather-data_value">{(wind*3.6).toFixed(1)}<span className='weather-data_measure'>km/h</span></p>
            </span><br/>
         </div>
         <div className="weather-data_box">
            <span className="weather-data_property">
               <p className="weather-data_title">Pressure</p>
               <p className="weather-data_value">{pressure}<span className='weather-data_measure'>mbar</span></p>
            </span>
            <span className="weather-data_property">
               <p className="weather-data_title">description</p>
               <p className="weather-data_value1">{desc}</p>
            </span>
         </div>
      </div>
   )
}

export default WeatherInfo