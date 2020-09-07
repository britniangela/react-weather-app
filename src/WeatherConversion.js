import React from "react";
​
export default function WeatherConversion(props) {
  if (props.units === "imperial") {
    return (
      <div className="WeatherConversion">
        <span className="temperature">{Math.round(props.temperature)}</span>
        <span className="unit">°F</span>
        <span className="unit"> | </span>
        <span
          className="unit convert"
          onClick={() => props.setUnits("celsius")}
        >
          °C
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherConversion">
        <span className="temperature">
          {Math.round(((props.temperature - 32) * 5) / 9)}
        </span>
        <span className="unit">°C</span>
        <span className="unit"> | </span>
        <span
          className="unit convert"
          onClick={() => props.setUnits("imperial")}
        >
          °F
        </span>
      </div>
    );
  }
}
