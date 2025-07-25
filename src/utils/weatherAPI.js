import { handleResponse } from "./api";

export const getWeather = ({ latitude, longitude }, APIkey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then(handleResponse);
};

export const filterWeatherData = (data) => {
  const result = {};
  result.city = data.name;
  result.temp = { F: Math.round(data.main.temp), C: Math.round((((data.main.temp) - 32)* 5) /9)};
  result.type = getWeatherType(result.temp.F);
  result.condition = data.weather[0].main.toLowercase;
  result.isDay = isDay(data.sys);
  return result;
};

export const getWeatherType = (temperature) => {
  if (temperature > 86) {
    return "hot";
  } else if (temperature > 66 && temperature < 86) {
    return "warm";
  } else {
    return "cold";
  }
};

const isDay = ({ sunrise, sunset }, now) => {
  return sunrise * 1000 < now && now < sunset * 1000;
};


