import React from 'react';
import partlySunny from "./icons/partly_sunny.png";
import cloudy from "./icons/cloudy.png";
import fog from "./icons/fog.png";
import rain from "./icons/rain.png";
import snow from "./icons/snow.png";
import sunny from "./icons/sunny.png";
import thunderstorm from "./icons/thunderstorm.png";
import "./WeatherDisplay.css";

// Handles the weather display container for the app - if no city found displays a message that states this
const WeatherDisplay = ({weather}) => {
  var expr = typeof weather.main != "undefined" ?  weather.weather[0].main : 'no';
  var desr = typeof weather.main != "undefined" ?  weather.weather[0].description : 'no';
  var imgsrc;
  switch (expr) {
    case "Clouds": {
      if (desr === "few clouds" || desr === "scattered clouds")
        imgsrc = partlySunny;
      else 
        imgsrc = cloudy;
      break;
    }
    case "Clear": {
      imgsrc = sunny;
      break;
    }
    case "Snow": {
      imgsrc = snow;
      break;
    }
    case "Rain": {
      imgsrc = rain;
      break;
    }
    case "Drizzle": {
      imgsrc = rain;
      break;
    }
    case "Thunderstorm": {
      imgsrc = thunderstorm;
      break;
    }
    default: {
      imgsrc = fog;
      break;
    }
  }

  return (
    <div className="WeatherDisplay">
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-container">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>

            </div>
            <div className="weather-container">
              <div className="weather">{weather.weather[0].description}</div>
              <div className="weather-temp">
                
                <div className="weather-icon">
                  <img src={imgsrc}/>
                </div>
                <div className="temperature">
                  {Math.round(weather.main.temp)}°C
                </div>
              </div>
            </div>
          </div>
        ) : (
        <div>{weather.message}</div>
        )}
    </div>
  );
}

export default WeatherDisplay;