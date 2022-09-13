export interface IWeatherLocationProps {
  latitude: number;
  longitude: number;
}

export interface ITimeIconListProps {
  "01d": string;
  "01n": string;
  "02d": string;
  "02n": string;
  "03d": string;
  "03n": string;
  "04d": string;
  "04n": string;
  "09d": string;
  "09n": string;
  "10d": string;
  "10n": string;
  "11d": string;
  "11n": string;
  "13d": string;
  "13n": string;
  "50d": string;
}
export interface IStatusTime {
  reactIconLocation: string;
  reactIconRefresh: string;
  reactHumidity: string;
  reactThermometerCelsius: string;
  reactThermometerColder: string;
  reactThermometerWarmer: string;
  reactThermometer: string;
  reactWind: string;
}

export interface WeatherLocationDataProps {
  temp: number | string;
  location: string;
  description: string;
  main: string;
  icon: keyof ITimeIconListProps;
  date: string;
  humidity: number | string;
  windSpeed: number;
  temp_max: string;
  temp_min: string;
  feels_like: number | string;
}
