import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>

      <h1>Orlando</h1>
      <ul>
        <li>Wednesday 01:22</li>
        <li>Partly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Partly Cloudy"
          />
          93°F
        </div>
        <div className="col-6">
          <ul>
            <li>Preceipitation: 10%</li>
            <li>Humidity: 56%</li>
            <li>Wind: 10 mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
