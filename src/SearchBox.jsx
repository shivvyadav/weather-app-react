import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import {useState} from "react";

export default function SearchBox({updateWeatherInfo}) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  let API_URL = "https://api.openweathermap.org/data/2.5/weather";
  // Vite exposes env vars via import.meta.env and requires the VITE_ prefix
  const apiKey = import.meta.env.VITE_API_KEY;

  let getWeatherInfo = async () => {
    let res = await fetch(`${API_URL}?q=${city}&appid=${apiKey}&units=metric`);
    let data = await res.json();
    let result = {
      name: data.name,
      temp: data.main.temp,
      feels_like: data.main.feels_like,
      tempMin: data.main.temp_min,
      tempMax: data.main.temp_max,
      humidity: data.main.humidity,
      wind: data.wind.speed,
      weather: data.weather[0].description,
    };
    console.log(result);
    return result;
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };
  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      let newInfo = await getWeatherInfo();
      updateWeatherInfo(newInfo);
      setCity("");
    } catch (err) {
      // log the error so the variable is used and developers can debug
      console.error(err);
      setError(true);
    }
  };
  return (
    <div className='SearchBox'>
      <form action='' onSubmit={handleSubmit}>
        <TextField
          id='city'
          label='city name'
          variant='outlined'
          value={city}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <Button variant='contained' type='submit'>
          Search
        </Button>
      </form>
      {error ? <p style={{color: "red"}}>Place not found</p> : null}
    </div>
  );
}
