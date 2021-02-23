import React, {useState, useEffect } from 'react'
import axios from 'axios'

const APIKey = process.env.REACT_APP_WEATHER_API_KEY;

export const Weather = () => {
	const [ WeatherData, setWeatherData] = useState(null);
	
	useEffect(() => {
		axios.get('http://ip-api.com/json/')
			.then ((res) => {
				console.log(res.data)
			})
			.catch((err) => {
				console.log(err)
			})
	}, []);

	return (
		<div>
			
		</div>
	)
}
