import React, { useState } from "react";

import WeatherForecastPreview from "./WeatherForecastPreview";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="WeatherForecast row">
        <WeatherForecastPreview data={forecast.list[0]} units={props.units} />
        <WeatherForecastPreview data={forecast.list[1]} units={props.units} />
        <WeatherForecastPreview data={forecast.list[2]} units={props.units} />
        <WeatherForecastPreview data={forecast.list[3]} units={props.units} />
        <WeatherForecastPreview data={forecast.list[4]} units={props.units} />
        <WeatherForecastPreview data={forecast.list[5]} units={props.units} />
      </div>
    );
  } else {
    let apiKey = "137e68217e6f5991d5d7befae9ff8e52";
    let apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=imperial`;
    axios.get(apiURL).then(handleForecastResponse);

    return null;
  }
}
