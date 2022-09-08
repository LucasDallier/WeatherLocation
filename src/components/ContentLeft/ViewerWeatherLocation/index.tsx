import {
  ReactCloudyDay,
  ReactCloudyNight,
  ReactDay,
  ReactMist,
  ReactNight,
  ReactRainy,
  ReactRainySun,
  ReactSnowy,
  ReactThunder,
} from "../../../assets";

import { WeatherLocationDataProps } from "../../../interfaces/weather";

import {
  Container,
  Content,
  Degrees,
  CityAndHours,
  WeatherIcon,
} from "./styles";
interface IDataWeather {
  dataWeatherLocation: WeatherLocationDataProps;
}

export function ViewerWeatherLocation({ dataWeatherLocation }: IDataWeather) {
  const TimeIconList = {
    "01d": ReactDay,
    "01n": ReactNight,
    "02d": ReactCloudyDay,
    "02n": ReactCloudyNight,
    "03d": ReactCloudyDay,
    "03n": ReactCloudyNight,
    "04d": ReactCloudyDay,
    "04n": ReactCloudyNight,
    "09d": ReactRainy,
    "09n": ReactRainy,
    "10d": ReactRainySun,
    "10n": ReactRainy,
    "11d": ReactThunder,
    "11n": ReactThunder,
    "13d": ReactSnowy,
    "13n": ReactSnowy,
    "50d": ReactMist,
  };

  const TimeIconListComponent = TimeIconList[dataWeatherLocation.icon];

  return (
    <Container icon={dataWeatherLocation.icon}>
      <Content>
        <Degrees>
          <span>{`${dataWeatherLocation.temp}°`} </span>
        </Degrees>
        <CityAndHours>
          <span>{dataWeatherLocation.location}</span>
          <p>{dataWeatherLocation.date}</p>
        </CityAndHours>
        <WeatherIcon>
          <TimeIconListComponent />
          <span>{dataWeatherLocation.main}</span>
        </WeatherIcon>
      </Content>
    </Container>
  );
}
