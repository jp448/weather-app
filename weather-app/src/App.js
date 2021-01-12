import React, { useState, useEffect } from "react";
import keys from "./Keys";
import axios from "axios"; 
import WeatherDisplay from "./WeatherDisplay";
import Select from "./Select";
import Input from "./Input";
import "./App.css"

const api = {
  key: keys.API_KEY,
  base: keys.BASE_URL
}

function App() {
  // States that may change including the input for city/country and the weather data sent from API.
  const [queryCity, setQueryCity] = useState("");
  const [queryCountry, setQueryCountry] = useState("");
  const [weather, setWeather] = useState({});

  // Function that runs only on re-render. Finds a random geographical location to display the weather.
  useEffect(() => {
    async function getData() {
      let response = [];
      let foundCity = false;
      while (!foundCity) {
        let lat = Math.random()*180 - 90;
        let lon = Math.random()*180 - 90;
        response = await axios.get(`${api.base}weather?lat=${lat}&lon=${lon}&units=metric&appid=${api.key}`);
        foundCity = response.data.name !== '' ? true : false;
      }
      setWeather(response.data);
    }
    getData();
  }, []);

  // Grabs the user inputs from form and grabs the correct return data
  const search = (e) => {
    fetch(`${api.base}weather?q=${queryCity},${queryCountry}&units=metric&appid=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setQueryCity("");
        setQueryCountry("");
        setWeather(result);
      });
  };

  return (
    <div className="App">
      <main>
        <div className="centerWindow">
          <form className="App-Form float">
            <Input onChangeHandle = {setQueryCity} value={queryCity} />
            <Select onChangeHandle = {setQueryCountry} />
            <p className="App-Button" onClick={search}>Submit</p>
          </form>
          <div  className="float" >
            <WeatherDisplay weather={weather}/>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;