import React, { useState, useEffect } from "react";
import axios from "axios";
const APIKey = process.env.REACT_APP_WEATHER_API_KEY;

export const Weather = () => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    getDataRequest();
  }, []);

  const getDataRequest = async () => {
    try {
      const locationResp = await axios.get("http://ip-api.com/json/");
      const cityName = locationResp.data.city;

      const weatherResp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}`);

      const weatherDataResp = {
        name: weatherResp.data.name,
        desc: weatherResp.data.weather[0].description,
        icon: weatherResp.data.weather[0].icon,
        tempF: Math.floor((weatherResp.data.main.temp - 273.15) * 1.8 + 32),
        tempC: Math.floor(weatherResp.data.main.temp - 273.15),
      };
      //Setting state
      setWeatherData(weatherDataResp);
    } catch (err) {
      console.error(err.message);
    }
  };
  console.log(weatherData);

  return (
    <div>
      {/* Weather Information */}
      <img src={`https://openweathermap.org/img/wn/${weatherData.icon}.png`} alt="Weather icon" height="100" width="100" />
      <p className="lead font-italic">
        {weatherData.name} | {weatherData.desc}
      </p>
      <p className="h1">
        <span> {weatherData.tempF} &#176;F</span>
        <span className="lead"> {weatherData.tempC} &#176;C</span>
      </p>
    </div>
  );
};
