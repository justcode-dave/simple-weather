// useWeatherText.js
import { useState } from 'react';

const useWeatherText = (initialMainText = '', initialSubText = '') => {
  const [mainText, setMainText] = useState(initialMainText);
  const [subText, setSubText] = useState(initialSubText);

  const updateMainText = (newMainText) => setMainText(newMainText);
  const updateSubText = (newSubText) => setSubText(newSubText);

  return { mainText, subText, updateMainText, updateSubText };
};

export default useWeatherText;