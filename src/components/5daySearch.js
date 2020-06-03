import React, {useContext} from "react"
import Context from "../Context"

const FiveDaySearch = () => {
   const {api_call_2} = useContext(Context)
   return(
      <div className="weather-search">
         <form onSubmit={api_call_2} className="weather-search_form">
            <input autoComplete="off" className="weather-search_input" type="text" name='location'/>
            <div className="weather-search_submit">
               <button className="weather-search_button">&rarr;</button>
            </div>
         </form>
      </div>
   )
}

export default FiveDaySearch