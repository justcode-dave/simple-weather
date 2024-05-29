// src/WeatherSummary.js
import React, { useState } from 'react';

const WeatherSummary = ({
  summary = "No summary available.",
  options = ['Metric', 'Imperial'],
  city = "Unknown City",
  region = "Unknown Region",
  time = "00:00",
  iconSrc = "//cdn.weatherapi.com/weather/64x64/day/113.png",
  largeText = "Temperature",
  stackedText1 = "High: 25°C",
  stackedText2 = "Low: 15°C"
}) => {
  const [unit, setUnit] = useState(options[0]);

  const handleChange = (event) => {
    setUnit(event.target.value);
  };

  const styles = {
    container: {
      width: '37rem',
      maxWidth: '90%',
      margin: '20px auto',
      padding: '10px',
      borderRadius: '20px',
      backgroundColor: 'white',
      boxShadow: '0 0 20px rgba(255, 0, 0, 0.1)',
      textAlign: 'center',
      position: 'relative', // Position relative for dropdown positioning
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    topRow: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '10px',
    },
    location: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'left',
    },
    cityRegion: {
      fontWeight: 'bold',
    },
    time: {
      color: 'gray',
      fontSize: '0.9rem',
    },
    dropdown: {
      padding: '5px 10px',
      borderRadius: '5px',
      border: 'none', // Remove solid border
      backgroundColor: '#f0f0f0',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer', // Pointer cursor for better UX
    },
    dropdownHover: {
      backgroundColor: '#e0e0e0', // Slightly darker background on hover
    },
    iconLargeTextContainer: {
      display: 'flex',
      alignItems: 'center',
      marginTop: '10px',
      justifyContent: 'flex-start', // Align items to the left
      width: '100%',
      paddingLeft: '10px', // Add padding to the left
    },
    icon: {
      width: '64px', // Icon size
      height: '64px',
      marginRight: '10px',
      padding: '5px', // Add padding to the icon
    },
    largeText: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginRight: '10px',
      padding: '5px', // Add padding to the large text
    },
    stackedTexts: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'left',
      padding: '5px', // Add padding to the stacked texts
    },
    stackedText: {
      fontSize: '1rem',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.topRow}>
        <div style={styles.location}>
          <div style={styles.cityRegion}>{city}, {region}</div>
          <div style={styles.time}>{time}</div>
        </div>
        <select 
          value={unit} 
          onChange={handleChange} 
          style={styles.dropdown}
          onMouseOver={e => e.currentTarget.style.backgroundColor = styles.dropdownHover.backgroundColor}
          onMouseOut={e => e.currentTarget.style.backgroundColor = styles.dropdown.backgroundColor}
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div style={styles.iconLargeTextContainer}>
        <img src={iconSrc} alt="Weather Icon" style={styles.icon} />
        <div style={styles.largeText}>{largeText}</div>
        <div style={styles.stackedTexts}>
          <div style={styles.stackedText}>{stackedText1}</div>
          <div style={styles.stackedText}>{stackedText2}</div>
        </div>
      </div>
      <p>{summary}</p>
    </div>
  );
};

export default WeatherSummary;
