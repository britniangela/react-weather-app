import React from "react";

export default function WeatherConversion(props) {
  return (
    <div className="WeatherConversion">
      <span className="temperature">{Math.round(props.celsius)}</span>
      <span className="unit">°F</span>
    </div>
  );
}
