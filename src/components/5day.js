import React, {useState} from 'react';
import axios from 'axios'
import Banner from './Banner';
import Error from './Error'
import FiveDaySearch from './5daySearch';
import FiveDayInfo from './5DayInfo'
import Context from '../Context'

const FiveDay = () => {
   const [weather, setWeather] = useState();
   const [city, setCity] = useState();
   const [error, setError] = useState();
   
   const api_call_2 = async e => {
      e.preventDefault();
      const location = e.target.elements.location.value;
      if(!location){
         return setError("Please enter the name of the city!"), setWeather()
      }
      const API_KEY = '2ed045ebe9cf41daeeb431cbed11b712'
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}&units=metric`
      const request = axios.get(url)
      const response = await request
      setWeather(response.data.list)
      setCity(response.data.city.name)
      setError()
      console.log(response)
   }

   return (
      <div className='main2'>
         <Banner>5 days forecast</Banner>
         <p className='text-align'>Enter the name of the city to get weather for 5 days</p>
         <Context.Provider value={{api_call_2, weather, city, error}}>
            <FiveDaySearch/>
            { weather && <FiveDayInfo/> }
            { error && <Error error={error}/> }
         </Context.Provider>
      </div>
   )
}

export default FiveDay