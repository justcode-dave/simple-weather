// src/WeatherText.js
import React from 'react';

const WeatherText = ({ header, subHeader, iconSrc }) => {
  const styles = {
    container: {
      backgroundColor: '#B22222', // Light brick brown color
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      margin: '0.77rem auto',
      padding: '1rem',
      width: '140px', // Adjust width to be larger
      height: '44px', // Adjust height to be smaller
      borderRadius: '11px', // More rounded corners
      transition: 'transform 0.2s',
      display: 'flex', // Flexbox for horizontal layout
      alignItems: 'center', // Center-align items vertically
    },
    icon: {
      width: '40px', // Icon width
      height: '40px', // Icon height
      marginRight: '1rem', // Space between icon and text
    },
    textContainer: {
      display: 'flex',
      flexDirection: 'column', // Stack header and subheader
      textAlign: 'left', // Left-align text
    },
    header: {
      margin: '0 0 0.5rem 0',
      color: 'white', // Solid white text color
    },
    subHeader: {
      margin: '0',
      color: 'white', // Solid white text color
    },
  };

  return (
    <div
      style={styles.container}
      onMouseOver={e => (e.currentTarget.style.transform = 'translateY(-5px)')}
      onMouseOut={e => (e.currentTarget.style.transform = 'translateY(0)')}
    >
      <img
        src={iconSrc}
        alt="Weather Icon"
        style={styles.icon}
      /> {/* Using the iconSrc prop */}
      <div style={styles.textContainer}>
        <h5 style={styles.header}>{header}</h5>
        <h2 style={styles.subHeader}>{subHeader}</h2>
      </div>
    </div>
  );
};

export default WeatherText;
