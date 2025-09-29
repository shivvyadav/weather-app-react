import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {

    const [weatherInfo, setWeatherInfo] = useState({});

    let updateWeatherInfo=(result)=>{
        setWeatherInfo(result);
    }

    return (
        <div style={{textAlign:"center"}}>
            <h1>Weather App by Shiv</h1>
            <SearchBox updateWeatherInfo={updateWeatherInfo} />
            <InfoBox info={weatherInfo}/>
       </div>
    );
}