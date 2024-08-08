'use client'

import React, { useState } from 'react'
import './style.css'

const Page = () => {
  let [city, setCity] = useState('');
  let [det, setDet] = useState({});
  
  const getResponse = async () => {
    const res = await fetch(`https://api.api-ninjas.com/v1/weather?city=${city}`, {
      method: 'GET',
      headers: { 'X-Api-Key': 'RDBV+YuAPGsh/pf1iYIvaA==OQXhAzWw3M64QouG' }
    });
    const details = await res.json();
    console.log(details);
    setDet(details);
  }

  return (
    <div id='container'>
      <h1>Weather App</h1>
      <div id='main'>
        <div id="header">
          <input
            type="search"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={getResponse}>Search</button>
        </div>

        <h2>Details</h2>
        <div id="details">

        
          {det.temp ? (
            <>
              <h3>{city}</h3>
              <p><strong>Temperature:</strong> {det.temp}°C</p>
              <p><strong>Feels Like:</strong> {det.feels_like}°C</p>
              <p><strong>Humidity:</strong> {det.humidity}%</p>
              <p><strong>Max Temperature:</strong> {det.max_temp}°C</p>
              <p><strong>Min Temperature:</strong> {det.min_temp}°C</p>
              <p><strong>Cloud Coverage:</strong> {det.cloud_pct}%</p>
              <p><strong>Wind Speed:</strong> {det.wind_speed} m/s</p>
              <p><strong>Wind Direction:</strong> {det.wind_degrees}°</p>
              <p><strong>Sunrise:</strong> {new Date(det.sunrise * 1000).toLocaleTimeString()}</p>
              <p><strong>Sunset:</strong> {new Date(det.sunset * 1000).toLocaleTimeString()}</p>
              </>
          ):''}
      </div>
      </div>
    </div>
  )
}

export default Page


