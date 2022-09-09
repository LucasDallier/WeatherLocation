//ASSETS
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

//INTERFACES
import { WeatherLocationDataProps } from "../../../interfaces/weather";

//STYLES
import {
  Container,
  City,
  Section,
  WeatherIcon,
  ContentMoreInfo,
  CityAndHours,
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
    <Container>
      <City>
        <span className="city">{dataWeatherLocation.location}</span>
      </City>

      <Section>
        <span>{dataWeatherLocation.temp}°</span>

        <ContentMoreInfo>
          <span>Max: {dataWeatherLocation.temp_max}°</span>
          <span>Min: {dataWeatherLocation.temp_min}°</span>
          <span>Feels Like: {dataWeatherLocation.feels_like}°</span>
        </ContentMoreInfo>

        <CityAndHours>
          <span>{dataWeatherLocation.location}</span>
          <p>{dataWeatherLocation.date}</p>
        </CityAndHours>

        <WeatherIcon>
          <TimeIconListComponent />
          <span>{dataWeatherLocation.main}</span>
        </WeatherIcon>
      </Section>
    </Container>
  );
}
