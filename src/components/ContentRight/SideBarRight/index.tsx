import {
  ReactHumidity,
  ReactIconLocation,
  ReactIconRefresh,
  ReactThermometer,
  ReactThermometerCelsius,
  ReactThermometerColder,
  ReactThermometerWarmer,
  ReactWind,
} from "../../../assets";
import { WeatherLocationDataProps } from "../../../interfaces/weather";

//STYLES
import {
  Container,
  BoxButtons,
  BtnLocation,
  BtnRefresh,
  SectionRightTop,
  DescriptionInfo,
} from "./styles";

export function SideBarRight({
  handleSetInfoWeather,
  dataInfoDescription,
}: {
  handleSetInfoWeather: () => {};
  dataInfoDescription: WeatherLocationDataProps;
}) {
  return (
    <Container>
      <SectionRightTop>
        <h3>Current Day</h3>
        <DescriptionInfo>
          <div>
            <span>
              <p>{dataInfoDescription.date}</p>{" "}
            </span>
          </div>
        </DescriptionInfo>
      </SectionRightTop>
      <SectionRightTop>
        <h3>Location Information</h3>

        <DescriptionInfo>
          <div>
            <span>Humidty: </span>
            <span>{`${dataInfoDescription.humidity}%`}</span>
            <ReactHumidity />
          </div>
          <div>
            <span>Temp:</span>
            <span>{`${dataInfoDescription.temp}°`}</span>
            <ReactThermometerCelsius />
          </div>
          <div>
            <span>Temp Max:</span>
            <span>{`${dataInfoDescription.temp_max}°`}</span>
            <ReactThermometerWarmer />
          </div>
          <div>
            <span>Temp Min:</span>
            <span>{`${dataInfoDescription.temp_min}°`}</span>
            <ReactThermometer />
          </div>
          <div>
            <span>Feels Like:</span>
            <span>{`${dataInfoDescription.feels_like}°`}</span>

            {dataInfoDescription.feels_like < dataInfoDescription.temp ? (
              <ReactThermometerColder />
            ) : (
              <ReactThermometerWarmer />
            )}
          </div>
          <div>
            <span>Wind Speed:</span>
            <span>{`${dataInfoDescription.windSpeed?.toFixed(0)} km/h`}</span>
            <ReactWind id="wind" />
          </div>
        </DescriptionInfo>
      </SectionRightTop>
      <BoxButtons>
        <BtnLocation type="button" onClick={handleSetInfoWeather}>
          <ReactIconLocation />
          Current Location
        </BtnLocation>
        <BtnRefresh type="button" onClick={handleSetInfoWeather}>
          <ReactIconRefresh />
          Refresh
        </BtnRefresh>
      </BoxButtons>
    </Container>
  );
}

export default SideBarRight;
