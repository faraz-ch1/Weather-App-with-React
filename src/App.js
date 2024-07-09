import React, { useState } from 'react';
import './App.css';
import Search from "./components/search"
import Display from "./components/display"

function App() {
  const [weatherData, setWeatherData] = useState()
  function passData(data){
    return setWeatherData(data)
  }
  return (
    <div className="container">
        <h1 className="title">Weather App</h1>
        <Search getData={passData}/>
        {weatherData && (<Display 
            cityName = {weatherData.cityName}
            temperature= {weatherData.temperature}
            description= {weatherData.description}
            feelslike = {weatherData.feelslike}
            humidity= {weatherData.humidity} />)}
      </div>
  );
}

export default App;
