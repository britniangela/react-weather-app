import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast row">
        <div className="col">
          {new Date(forecast.list[0].dt * 1000).getHours()}:00
          <WeatherIcon code={forecast.list[0].weather[0].icon} />
          {Math.round(forecast.list[0].main.temp)}°F
        </div>
        <div className="col">
          {new Date(forecast.list[1].dt * 1000).getHours()}:00
          <WeatherIcon code={forecast.list[0].weather[0].icon} />
          {Math.round(forecast.list[0].main.temp)}°F
        </div>
        <div className="col">
          {new Date(forecast.list[2].dt * 1000).getHours()}:00
          <WeatherIcon code={forecast.list[0].weather[0].icon} />
          {Math.round(forecast.list[0].main.temp)}°F
        </div>
        <div className="col">
          {new Date(forecast.list[3].dt * 1000).getHours()}:00
          <WeatherIcon code={forecast.list[0].weather[0].icon} />
          {Math.round(forecast.list[0].main.temp)}°F
        </div>
        <div className="col">
          {new Date(forecast.list[4].dt * 1000).getHours()}:00
          <WeatherIcon code={forecast.list[0].weather[0].icon} />
          {Math.round(forecast.list[0].main.temp)}°F
        </div>
      </div>
    );
  } else {
    let apiKey = "137e68217e6f5991d5d7befae9ff8e52";
    let apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=imperial`;
    axios.get(apiURL).then(handleForecastResponse);

    return null;
  }
}
