import React, {useState} from "react"
import axios from 'axios'
import Context from '../Context'
import Banner from "./Banner"
import WeatherSearch from './WeatherSearch'
import WeatherInfo from './WeatherInfo'
import Error from './Error'

const Main = () => {
   const [weather, setWeather] = useState();
   const [city, setCity] = useState();
   const [wind, setWind] = useState();
   const [desc, setDesc] = useState()
   const [error, setError] = useState();
   const api_call = async e => {
      e.preventDefault()
      const location = e.target.elements.location.value;
      if(!location){
         return setError("Please enter the name of the city!"), setWeather();
      }
      const API_KEY = '2ed045ebe9cf41daeeb431cbed11b712'
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
      const request = axios.get(url);
      const response = await request;
      setWeather(response.data.main)
      setCity(response.data.name)
      setWind(response.data.wind.speed)
      setDesc(response.data.weather[0].description)
      setError()
      console.log(response)
   }

   return (
      <div className='main'>
         <Banner>Forcast Information</Banner>
         <p className='text-align'>Enter the name of the city to get weather!</p>
         <Context.Provider value={{api_call, weather, city, wind, desc}}>
            <WeatherSearch/>
            { error && <Error error={error}/> }
            { weather && <WeatherInfo/> }
         </Context.Provider>
      </div>
   )
}

export default Main