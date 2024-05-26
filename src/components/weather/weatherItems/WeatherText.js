// WeatherText.js
import React, { createContext, useContext } from 'react';
import useWeatherText from './useWeatherText';
import './weatherText.css'
const WeatherTextContext = createContext();

const WeatherText = ({ children, initialMainText, initialSubText }) => {
  const weatherTextState = useWeatherText(initialMainText, initialSubText);

  return (
    <WeatherTextContext.Provider value={weatherTextState}>
      {children}
    </WeatherTextContext.Provider>
  );
};

const useWeatherTextContext = () => useContext(WeatherTextContext);

const MainText = ({ children }) => {
  const { mainText } = useWeatherTextContext();
  return <div style={{ fontSize: '2rem' }}>{children || mainText}</div>;
};

const SubText = ({ children }) => {
  const { subText } = useWeatherTextContext();
  return <div style={{ fontSize: '1rem' }}>{children || subText}</div>;
};

const UpdateMainText = ({ children, onClick }) => {
  const { updateMainText } = useWeatherTextContext();
  return <button onClick={() => updateMainText(children)}>{children}</button>;
};

const UpdateSubText = ({ children, onClick }) => {
  const { updateSubText } = useWeatherTextContext();
  return <button onClick={() => updateSubText(children)}>{children}</button>;
};

WeatherText.MainText = MainText;
WeatherText.SubText = SubText;
WeatherText.UpdateMainText = UpdateMainText;
WeatherText.UpdateSubText = UpdateSubText;

export default WeatherText;