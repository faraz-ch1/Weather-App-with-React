import { useState } from "react";
import React from "react";

function Search(props){
    const [input, setInput] = useState()
    function getInput(inputText){
        return setInput(inputText.target.value)
    }
    function callApi(){
        const city = input

        const apiKey = 'a41b5998793faeeada6dd60ca7947535';

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        const weatherInfo = {
            cityName: data.name,
            temperature: Math.floor(data.main.temp - 273.15),
            description: data.weather[0].main,
            feelslike: Math.floor(data.main.feels_like - 273.15),
            humidity: data.main.humidity,
          };
          props.getData(weatherInfo)
  
      } else {
        const error = data.message
        console.log(error)
      }
    })
    .catch(error => { 
      console.log(error)
    });

    }
    return (     
    <div className="location-search">
    <input onChange={getInput} type="text" id="location" placeholder="Enter City Name" />
    <button id="search-button" onClick={callApi}>Search</button>
    </div>
  )
}

export default Search