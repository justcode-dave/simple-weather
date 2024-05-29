import Weather from './components/weather/Weather.js'
import WeatherSummary from './components/weather/WeatherSummary.js';
import SearchBar from './components/search/SearchBar.js';
import CityMap from './components/map/cityMap.js';
import { useState } from 'react';
import './App.css';

function App() {

  const [city, setCity] = useState('');

  const handleSearch = (searchTerm) => {
    setCity(searchTerm);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
      </header>
      <SearchBar onSearch={handleSearch} />
      <WeatherSummary city= {city}/>
      <Weather city = {city}/>
    </div>
  
  );
}

export default App;
