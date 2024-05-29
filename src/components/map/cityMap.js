// src/components/cityMap.js
import React, { useEffect, useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const CityMap = ({ cityName }) => {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '400px',
    latitude: 0,
    longitude: 0,
    zoom: 12
  });
  const [isLoaded, setIsLoaded] = useState(false);

  const apiKey = 'YOUR_MAPBOX_API_KEY'; 
  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${cityName}.json?access_token=${apiKey}`);
        const data = await response.json();
        if (data.features && data.features.length > 0) {
          const location = data.features[0].center;
          setViewport((prevViewport) => ({
            ...prevViewport,
            latitude: location[1],
            longitude: location[0],
            zoom: 12
          }));
          setIsLoaded(true);
        }
      } catch (error) {
        console.error('Error fetching coordinates:', error);
      }
    };

    fetchCoordinates();
  }, [cityName, apiKey]);

  const containerStyles = {
    display: 'flex',
    alignItems: 'center',
    width: '37rem',
    maxWidth: '90%',
    margin: '20px auto',
    padding: '10px',
    borderRadius: '20px',
    boxShadow: '0 0 20px rgba(255, 0, 0, 0.1)',
  };

  return (
    <div style={containerStyles}>
      {isLoaded && (
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={apiKey}
          onViewportChange={nextViewport => setViewport(nextViewport)}
        >
          <Marker latitude={viewport.latitude} longitude={viewport.longitude}>
            <div style={{ color: 'red' }}>📍</div>
          </Marker>
        </ReactMapGL>
      )}
    </div>
  );
};

export default CityMap;
