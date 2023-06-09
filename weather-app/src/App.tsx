import React, { useState } from "react";
// import axios from "axios";

function App() {
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=bb97dcf45fb2360d40faab747c1ee7fd`;

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Dallas</p>
          </div>
          <div className="temp">
            <h1>60&deg;F</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>

        <div className="bottom">
          <div className="feels">
            <h1>65&deg;F</h1>
            <p className="bold">Feels like</p>
          </div>
          <div className="humidity">
            <p>20%</p> &nbsp;
            <p className="bold">&nbsp; Humidity</p>
          </div>
          <div className="wind">
            <p>12 MPH</p> &nbsp;
            <p className="bold">&nbsp; Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
