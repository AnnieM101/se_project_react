
export const coordinates = {
  latitude: 40.43,
  longitude: -80.0,
};

export const APIkey = "4a959ad24ddbbb382a999cf05299343a";

export const weatherOptions = [
  {
    day: true,
    condition: "clear",
    url: new URL("../assets/Day/Clear.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "cloudy",
    url: new URL("../assets/Day/Cloudy.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "fog",
    url: new URL("../assets/Day/Fog.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "rain",
    url: new URL("../assets/Day/Rain.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "snow",
    url: new URL("../assets/Day/Snow.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "storm",
    url: new URL("../assets/Day/Storm.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "clear",
    url: new URL("../assets/Night/NightClear.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "cloudy",
    url: new URL("../assets/Night/NightCloud.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "fog",
    url: new URL("../assets/Night/NightFog.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "rain",
    url: new URL("../assets/Night/NightRain.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "snow",
    url: new URL("../assets/Night/NightSnow.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "storm",
    url: new URL("../assets/Night/NightStorm.svg", import.meta.url).href,
  },
];

export const defaultWeatherOptions = {
  day: {
    url: new URL("../assets/Day/Clear.svg", import.meta.url).href,
  },
  night: {
    url: new URL("../assets/Night/NightClear.svg", import.meta.url).href,
  },
};
