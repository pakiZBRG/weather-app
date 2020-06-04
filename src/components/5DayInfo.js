import React, { useContext } from "react";
import Context from "../Context";
import {Link} from 'react-router-dom'

const FiveDayInfo = () => {
   const {weather, city} = useContext(Context);
   const temp = weather[0].main.temp;
   const pres = weather[0].main.pressure;
   const hum = weather[0].main.humidity;
   const desc = weather[0].weather[0].description;
   const wind = weather[0].wind.speed;
   const time = weather[0].dt_txt
   console.log(temp, desc, pres, hum, wind, time)
   const temp1 = weather[8].main.temp;
   const pres1 = weather[8].main.pressure;
   const hum1 = weather[8].main.humidity;
   const desc1 = weather[8].weather[0].description;
   const wind1 = weather[8].wind.speed
   const time1 = weather[8].dt_txt
   console.log(temp1, desc1, pres1, hum1, wind1, time1)
   const temp2 = weather[16].main.temp;
   const pres2 = weather[16].main.pressure;
   const hum2 = weather[16].main.humidity;
   const desc2 = weather[16].weather[0].description;
   const wind2 = weather[16].wind.speed
   const time2 = weather[16].dt_txt
   console.log(temp2, desc2, pres2, hum2, wind2, time2)
   const temp3 = weather[24].main.temp;
   const pres3 = weather[24].main.pressure;
   const hum3 = weather[24].main.humidity;
   const desc3 = weather[24].weather[0].description;
   const wind3 = weather[24].wind.speed
   const time3 = weather[24].dt_txt
   console.log(temp3, desc3, pres3, hum3, wind3, time3)
   const temp4 = weather[32].main.temp;
   const pres4 = weather[32].main.pressure;
   const hum4 = weather[32].main.humidity;
   const desc4 = weather[32].weather[0].description;
   const wind4 = weather[32].wind.speed
   const time4 = weather[32].dt_txt
   console.log(temp4, desc4, pres4, hum4, wind4, time4)
   const temp5 = weather[39].main.temp;
   const pres5 = weather[39].main.pressure;
   const hum5 = weather[39].main.humidity;
   const desc5 = weather[39].weather[0].description;
   const wind5 = weather[39].wind.speed
   const time5 = weather[39].dt_txt
   console.log(temp5, desc5, pres5, hum5, wind5, time5)

   function weatherD(desc){
      if(desc === "light rain") return <img src={require('../images/light_rain.png')} title='light rain' alt='light rain'/>
      else if(desc === "scattered clouds" || desc==="broken clouds") return <img src={require('../images/scattered_clouds.png')} title='scattered clouds' alt='scattered clouds'/>
      else if(desc === "overcast clouds" || desc==="few clouds") return <img src={require('../images/overcast_clouds.png')} title='overcast clouds' alt='overcast clouds'/>
      else if(desc === "clear sky") return <img src={require('../images/clear_sky.png')} title='clear sky' alt='clear sky'/>
      else if(desc === "moderate rain") return <img src={require('../images/moderate_rain.png')} title='moderate rain' alt='moderate rain'/>
      else if(desc === "light snow") return <img src={require('../images/light_snow.png')} title='light snow' alt='light snow'/>
      else if(desc === "snow") return <img src={require('../images/snow.png')} title='snow' alt='snow'/>
   }

   return (
      <div>
         <p className='flex_center'>Weather forecast for <span className="weather-data_city">{city}</span> as of <span className='weather-data_city'>{time.slice(10, -3)}</span></p>
         <p className='flex_center'><Link to='/' className='weather-data_5day'>Go Back</Link></p>
         <div className='flex'>
            <div className='flex_part'>
               <p className='flex_time'>{time.slice(5, -9)}</p>
               <p><span className='flex_img'>{weatherD(desc)}</span></p>
               <p><span className='flex_misura'>Temperature: </span><span className={temp>0 ? 'flex_num' : 'flex_blue-num'}>{temp.toFixed(1)}</span>°C</p>
               <p><span className='flex_misura'>Pressure: </span><span className='flex_num'>{pres}</span>mbar</p>
               <p><span className='flex_misura'>Humidity: </span><span className='flex_num'>{hum}</span>%</p>
               <p><span className='flex_misura'>Wind Speed: </span><span className='flex_num'>{(wind*3.6).toFixed(1)}</span>km/h</p>
            </div>
            <div className='flex_part'>
               <p className='flex_time'>{time1.slice(5, -9)}</p>
               <p><span className='flex_img'>{weatherD(desc1)}</span></p>
               <p><span className='flex_misura'>Temperature: </span><span className={temp1>0 ? 'flex_num' : 'flex_blue-num'}>{temp1.toFixed(1)}</span>°C</p>
               <p><span className='flex_misura'>Pressure: </span><span className='flex_num'>{pres1}</span>mbar</p>
               <p><span className='flex_misura'>Humidity: </span><span className='flex_num'>{hum1}</span>%</p>
               <p><span className='flex_misura'>Wind Speed: </span><span className='flex_num'>{(wind1*3.6).toFixed(1)}</span>km/h</p>
            </div>
            <div className='flex_part'>
               <p className='flex_time'>{time2.slice(5, -9)}</p>
               <p><span className='flex_img'>{weatherD(desc2)}</span></p>
               <p><span className='flex_misura'>Temperature: </span><span className={temp2>0 ? 'flex_num' : 'flex_blue-num'}>{temp2.toFixed(1)}</span>°C</p>
               <p><span className='flex_misura'>Pressure: </span><span className='flex_num'>{pres2}</span>mbar</p>
               <p><span className='flex_misura'>Humidity: </span><span className='flex_num'>{hum2}</span>%</p>
               <p><span className='flex_misura'>Wind Speed: </span><span className='flex_num'>{(wind2*3.6).toFixed(1)}</span>km/h</p>
            </div>
            <div className='flex_part'>
               <p className='flex_time'>{time3.slice(5, -9)}</p>
               <p><span className='flex_img'>{weatherD(desc3)}</span></p>
               <p><span className='flex_misura'>Temperature: </span><span className={temp3>0 ? 'flex_num' : 'flex_blue-num'}>{temp3.toFixed(1)}</span>°C</p>
               <p><span className='flex_misura'>Pressure: </span><span className='flex_num'>{pres3}</span>mbar</p>
               <p><span className='flex_misura'>Humidity: </span><span className='flex_num'>{hum3}</span>%</p>
               <p><span className='flex_misura'>Wind Speed: </span><span className='flex_num'>{(wind3*3.6).toFixed(1)}</span>km/h</p>
            </div>
            <div className='flex_part'>
               <p className='flex_time'>{time4.slice(5, -9)}</p>
               <p><span className='flex_img'>{weatherD(desc4)}</span></p>
               <p><span className='flex_misura'>Temperature: </span><span className={temp4>0 ? 'flex_num' : 'flex_blue-num'}>{temp4.toFixed(1)}</span>°C</p>
               <p><span className='flex_misura'>Pressure: </span><span className='flex_num'>{pres4}</span>mbar</p>
               <p><span className='flex_misura'>Humidity: </span><span className='flex_num'>{hum4}</span>%</p>
               <p><span className='flex_misura'>Wind Speed: </span><span className='flex_num'>{(wind4*3.6).toFixed(1)}</span>km/h</p>
            </div>
            <div className='flex_part'>
               <p className='flex_time'>{time5.slice(5, -9)}</p>
               <p><span className='flex_img'>{weatherD(desc5)}</span></p>
               <p><span className='flex_misura'>Temperature: </span><span className={temp5>0 ? 'flex_num' : 'flex_blue-num'}>{temp5.toFixed(1)}</span>°C</p>
               <p><span className='flex_misura'>Pressure: </span><span className='flex_num'>{pres5}</span>mbar</p>
               <p><span className='flex_misura'>Humidity: </span><span className='flex_num'>{hum5}</span>%</p>
               <p><span className='flex_misura'>Wind Speed: </span><span className='flex_num'>{(wind5*3.6).toFixed(1)}</span>km/h</p>
            </div>
         </div>
      </div>
   )
}

export default FiveDayInfo