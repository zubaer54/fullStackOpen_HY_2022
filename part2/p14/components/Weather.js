import axios from "axios";
import { useState, useEffect } from "react";

const Weather = (props) => {
    const [w, setW] = useState([])
    const [isLoading, setLoading] = useState(true)
    const city = props.cap[0]
    const api_key = process.env.REACT_APP_API_KEY
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`

    useEffect(() => {
        axios
        .get(url)
        .then(response => {
          setW(response.data)
          setLoading(false)
          console.log(response.data)
        })
    }, [])
    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h3>Weather in {city}</h3>
            <p>temperature {w.main.temp} Celsius <br></br>
            <img src = {`http://openweathermap.org/img/wn/${w.weather[0].icon}@2x.png`} /><br></br>
            wind {w.wind.speed} m/s</p>
        </div>
    )
}
export default Weather
