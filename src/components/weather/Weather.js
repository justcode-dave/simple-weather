import React, { useState, useEffect } from 'react';
import './Weather.css';
import WeatherText from './weatherComponents/WeatherText';

const Weather = () => {
  /* Internally Used State Variables */ 
  const [unitPreference, setUnitPreference] = useState('Imperial');
  const [timeOfDay, setTimeOfDay] = useState('daytime');

  /* Geographical Variables */
  const [city, setCity] = useState('Seattle');
  const [region, setRegion] = useState('Washington')
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

  let URL = 'http://api.weatherapi.com/v1/current.json?key=82e50679e0904a7295a205705242405&aqi=no';

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
      iconSrc: "//cdn.weatherapi.com/weather/64x64/day/113.png"
    },
    {
      header: "Rainy",
      subHeader: "2",
      iconSrc: "//cdn.weatherapi.com/weather/64x64/day/296.png"
    },
    {
      header: "Cloudy",
      subHeader: "3",
      iconSrc: "//cdn.weatherapi.com/weather/64x64/day/122.png"
    },
    {
      header: "Snowy",
      subHeader: "4",
      iconSrc: "//cdn.weatherapi.com/weather/64x64/day/326.png"
    },
    {
      header: "Windy",
      subHeader: "5",
      iconSrc: "//cdn.weatherapi.com/weather/64x64/day/248.png"
    },
    {
      header: "Stormy",
      subHeader: "6",
      iconSrc: "//cdn.weatherapi.com/weather/64x64/day/389.png"
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
            iconSrc={data.iconSrc} 
          />
        ))}
      </div>
    </div>
  );
};

export default Weather;
