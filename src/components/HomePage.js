import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { data } from "jquery";
const APIKey = process.env.REACT_APP_WEATHER_API_KEY;

export const HomePage = () => {
  const [weatherData, setWeatherData] = useState([]);
  const getWeather = async () => {
    try {
      const locationResponse = await axios.get("http://ip-api.com/json/");
      const cityName = locationResponse.data.city;

      const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}`);

      const weatherInfo = {
        name: weatherResponse.data.name,
        desc: weatherResponse.data.weather[0].description,
        icon: weatherResponse.data.weather[0].icon,
        tempF: Math.floor((weatherResponse.data.main.temp - 273.15) * 1.8 + 32),
        tempC: Math.floor(weatherResponse.data.main.temp - 273.15),
      };
      console.log(weatherResponse);

      //Setting state
      setWeatherData(weatherInfo);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-3">
          <div className="card border-0">
            <img className="card-img-top" src="https://i.imgur.com/6nWHsPp.jpg" alt="irwin-headshot" />
            <div className="card-body">
              <h2 className="card-title"> Irwin Marcano</h2>
              <hr />
              <p className="card-text h4">Web Developer</p>

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
          </div>
        </div>
        <div className="col-8 offset-1">
          <div className="jumbotron bg-transparent m-0 p-1">
            <blockquote className="blockquote">
              <p className="lead">
                Self-motivated Developer experienced with a wide range of programming utilities and languages. Knowledgeable of backend and frontend development requirements. Collaborative problem-solver with an analytical mindset and excellent
                technical abilities.
              </p>
              <Link to="/resume" className="btn btn-dark" role="button">
                Learn more
              </Link>
            </blockquote>
            <hr />
          </div>

          <h2 className="mb-5 text-center">Get in touch</h2>

          <div className="row justify-content-around">
            <a href="https://github.com/irwinx16" target="_black">
              <img src="https://i.imgur.com/0Vbe5RF.png" className="w-75" alt="github_icon" />
            </a>
            <a href="https://www.linkedin.com/in/irwinx16/" target="_black">
              <img src="https://i.imgur.com/n9xhCX4.png" className="w-75" alt="linkedin_icon" />
            </a>
            <a href="mailto:irgranados16@gmail.com?subject=Interview Request - <POSITION>" target="_black">
              <img src="https://i.imgur.com/TYE6LWC.png" className="w-75" alt="email_icon" />
            </a>
            <a href="https://drive.google.com/file/d/1dyVZ1NQLvEVGhtl7pDSJVvrahJo1GGUN/preview" target="_black">
              <img src="https://i.imgur.com/zPMpf6Y.png" className="w-75" alt="resume_icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
