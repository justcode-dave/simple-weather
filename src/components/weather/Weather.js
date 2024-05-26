import React, { useState, useEffect } from 'react';
import './Weather.css';
import WeatherText from './weatherItems/WeatherText';



const Weather = () => {
       /*Internal State Variables*/ 
  const [city, setCity] = useState('Seattle');
  const [region, setRegion] = useState('City of London')
  const [temperature, setTemperature] = useState(0);


  let URL = 'http://api.weatherapi.com/v1/current.json?key=82e50679e0904a7295a205705242405&aqi=no'

 

  useEffect(() =>{
       const fetchData = async () => {
              try{
                     const result = await fetch(URL)

                     result.json().then(json => {

                            setTemperature(json.current.temp_f);
                            setRegion(json.location.region)
                            console.log(json);
                     })
                     
                     /*
                     result.json().then(json => {
                            setTemperature(json.temperature)

                     })
                     */
                     

              }catch(error){
                     console.error('Error Fetching API data', error)
              }

       };
       fetchData();
       }, []);

  
  URL += '&q='
  URL += city;

  return (
    <div className="weather">
       <h1>{temperature}</h1>
       <WeatherText initialMainText= {temperature} initialSubText="Temperature">
              <WeatherText.MainText />
              <WeatherText.SubText />
       </WeatherText>
    </div>
  );
};

export default Weather;
