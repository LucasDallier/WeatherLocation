import { Container, Degrees, CityAndHours, WeatherIcon } from "./styles";

export function DataWeather() {
  return (
    <Container>
      <Degrees>
        <span>16º</span>
      </Degrees>
      <CityAndHours>
        <span>London</span>
        <span>06:09 - Monday, 9Sep'19</span>
      </CityAndHours>
      <WeatherIcon>
        <span>Cloudy</span>
      </WeatherIcon>
    </Container>
  );
}

export default DataWeather;
