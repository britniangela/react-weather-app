import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Orlando" />
        <footer>
          <a
            href="https://github.com/britniangela/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-Source Code
          </a>{" "}
          by Britni Burdette
        </footer>
      </div>
    </div>
  );
}
