// src/components/weather/Weather.js
import React, { useState, useEffect } from 'react';
import { FaCloudRain, FaTachometerAlt, FaWind, FaTint, FaGlobeAmericas, FaMapMarkerAlt } from 'react-icons/fa';
import './Weather.css';
import WeatherText from './weatherComponents/WeatherText';

const Weather = () => {
  /* Internally Used State Variables */ 
  const [unitPreference, setUnitPreference] = useState('Imperial');
  const [timeOfDay, setTimeOfDay] = useState('daytime');

  /* Geographical Variables */
  const [city, setCity] = useState('Seattle');
  const [region, setRegion] = useState('Washington');
  const [time, setTime] = useState();

  /* Text and Image State Variables */
  const [conditionText, setConditionText] = useState('');
  const [conditionIcon, setConditionIcon] = useState('');

  /* Quantitative State Variables */
  const [temperature, setTemperature] = useState(0);
  const [precipitation, setPrecipitation] = useState(0);
  const [pressure, setPressure] = useState(0);
  const [windSpeed, setWindSpeed] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  let apiKey = "";

  let URL = 'http://api.weatherapi.com/v1/current.json?aqi=no&';

  URL += apiKey;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(URL);

        result.json().then(json => {
          setTemperature(json.current.temp_f);
          setRegion(json.location.region);
          setConditionText(json.current.condition.text);
          setConditionIcon(json.current.condition.icon);
          setPrecipitation(json.current.condition.precip_mm);
          console.log(json);
        });
      } catch (error) {
        console.error('Error Fetching API data', error);
      }
    };
    fetchData();
  }, []);

  URL += '&q=';
  URL += city;

  const styles = {
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)', // 3 columns
      gap: '1rem',
      justifyContent: 'center',
    }
  };

  var weatherData = [
    {
      header: "Precipitation",
      subHeader: "0",
      icon: <FaCloudRain size={32} /> // Rainy cloud icon
    },
    {
      header: "Pressure",
      subHeader: "2",
      icon: <FaTachometerAlt size={32} /> // Pressure gauge icon
    },
    {
      header: "Windspeed",
      subHeader: "3",
      icon: <FaWind size={32} /> // Windy icon
    },
    {
      header: "Humidity",
      subHeader: "4",
      icon: <FaTint size={32} /> // Humidity (water drop) icon
    },
    {
      header: "Latitude",
      subHeader: "5",
      icon: <FaGlobeAmericas size={32} /> // Globe icon
    },
    {
      header: "Longitude",
      subHeader: "6",
      icon: <FaMapMarkerAlt size={32} /> // Map marker icon
    }
  ];

  return (
    <div className="weather">
      <div style={styles.container}>
        {weatherData.map((data, index) => (
          <WeatherText 
            key={index} 
            header={data.header} 
            subHeader={data.subHeader} 
            icon={data.icon} 
          />
        ))}
      </div>
    </div>
  );
};

export default Weather;
