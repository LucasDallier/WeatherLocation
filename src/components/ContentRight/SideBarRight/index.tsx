import { WeatherLocationDataProps } from "../../../interfaces/weather";
import { Icon } from "../../Icon";

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
  handleSetInfoWeather: () => void;
  dataInfoDescription: WeatherLocationDataProps;
}) {
  return (
    <Container data-testid="side-bar-right">
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
            <span>Humidity: </span>
            <span>{`${dataInfoDescription.humidity}%`}</span>
            <Icon code="reactHumidity" />
          </div>
          <div>
            <span>Temp:</span>
            <span>{`${dataInfoDescription.temp}°`}</span>
            <Icon code="reactThermometerCelsius" />
          </div>
          <div>
            <span>Temp Max:</span>
            <span>{`${dataInfoDescription.temp_max}°`}</span>
            <Icon code="reactThermometerWarmer" />
          </div>
          <div>
            <span>Temp Min:</span>
            <span>{`${dataInfoDescription.temp_min}°`}</span>
            <Icon code="reactThermometer" />
          </div>
          <div>
            <span>Feels Like:</span>
            <span>{`${dataInfoDescription.feels_like}°`}</span>

            {dataInfoDescription.feels_like < dataInfoDescription.temp ? (
              <Icon code="reactThermometerColder" />
            ) : (
              <Icon code="reactThermometerWarmer" />
            )}
          </div>
          <div>
            <span>Wind Speed:</span>
            <span>{`${dataInfoDescription.windSpeed?.toFixed(0)} km/h`}</span>
            <Icon code="reactWind" id="wind" />
          </div>
        </DescriptionInfo>
      </SectionRightTop>
      <BoxButtons>
        <BtnLocation type="button" onClick={handleSetInfoWeather}>
          <Icon code="reactIconLocation" />
          Current Location
        </BtnLocation>
        <BtnRefresh type="button" onClick={handleSetInfoWeather}>
          <Icon code="reactIconRefresh" />
          Refresh
        </BtnRefresh>
      </BoxButtons>
    </Container>
  );
}
