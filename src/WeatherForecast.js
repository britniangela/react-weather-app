import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(false);
  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        11:15
        <WeatherIcon code={forecast.list[0].weather[0].icon} />
        {Math.round(forecast.list[0].main.temp)}°F
      </div>
    );
  } else {
    let apiKey = "137e68217e6f5991d5d7befae9ff8e52";
    let apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=imperial`;
    axios.get(apiURL).then(handleForecastResponse);

    return null;
  }
}
