import "../WeatherCard/WeatherCard.css";
import { weatherOptions, defaultWeatherOptions } from "../../utils/constants";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnit";
import { useContext } from "react";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const filteredOptions = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  let weatherOption;
  if (filteredOptions.length === 0) {
    weatherOption = defaultWeatherOptions[weatherData.isDay ? "day" : "night"];
  } else {
    weatherOption = filteredOptions[0];
  }

  return (
      <section className="weather-card">
        <img
          className="weather-card__image"
          src={weatherOption?.url}
          alt={`Card showing ${weatherOption?.day ? "day" : "night"}time ${
            weatherOption?.condition
          } weather`}
        />
        <p className="weather-card__temperature">{currentTemperatureUnit === "F" ? weatherData.temp.F : weatherData.temp.C}&deg;{currentTemperatureUnit}</p>
      </section>
  );
}

export default WeatherCard;
