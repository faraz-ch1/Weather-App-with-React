import React from "react";


function Display(props){
    return (      
    <div className="weather-display">
    <p id="city">City: {props.cityName}</p>
    <p id="temperature">Temperature: {props.temperature}</p>
    <p id="feelslike">FeelsLike: {props.feelslike}</p>
    <p id="humidity">Humidity: {props.humidity}</p>
    <p id="description">Description: {props.description}</p>
  </div>
  )
}

export default Display