//INTERFACES
import { WeatherLocationDataProps } from "../../../interfaces/weather";
import { Icon } from "../../Icon";

//STYLES
import {
  Container,
  City,
  Section,
  WeatherIcon,
  ContentMoreInfo,
} from "./styles";
interface IDataWeather {
  dataWeatherLocation: WeatherLocationDataProps;
}

export function ViewerWeatherLocation({ dataWeatherLocation }: IDataWeather) {
  return (
    <Container data-testid="viewer-weather-location">
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

        <WeatherIcon>
          <Icon code={dataWeatherLocation.icon} />
          <span>{dataWeatherLocation.main}</span>
        </WeatherIcon>
      </Section>
    </Container>
  );
}
