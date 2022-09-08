import styled from "styled-components";

import BackgroundBrokenClouds from "../../../assets/background-weather/background-broken-clouds.jpg";
import BackgroundFewCloudsNight from "../../../assets/background-weather/background-few-clouds-night.jpg";
import BackgroundFewClouds from "../../../assets/background-weather/background-few-clouds.jpg";
import BackgroundMist from "../../../assets/background-weather/background-mist.jpg";
import BackgroundScatteredClouds from "../../../assets/background-weather/background-scattered clouds.jpg";
import BackgroundShowerRain from "../../../assets/background-weather/background-shower-rain.jpg";
import BackgroundSnowDay from "../../../assets/background-weather/background-snow-day.jpg";
import BackgroundSnowNight from "../../../assets/background-weather/background-snow-night.jpg";
import BackgroundThunderStorm from "../../../assets/background-weather/background-thunder-storm.jpg";

interface ITimeBackgroundListProps {
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

const TimeIconBackgroundList = {
  "01d": BackgroundFewClouds,
  "01n": BackgroundFewCloudsNight,
  "02d": BackgroundFewClouds,
  "02n": BackgroundFewCloudsNight,
  "03d": BackgroundScatteredClouds,
  "03n": BackgroundScatteredClouds,
  "04d": BackgroundBrokenClouds,
  "04n": BackgroundBrokenClouds,
  "09d": BackgroundShowerRain,
  "09n": BackgroundShowerRain,
  "10d": BackgroundShowerRain,
  "10n": BackgroundShowerRain,
  "11d": BackgroundThunderStorm,
  "11n": BackgroundThunderStorm,
  "13d": BackgroundSnowDay,
  "13n": BackgroundSnowNight,
  "50d": BackgroundMist,
};

export const Container = styled.div<ITimeBackgroundListProps>`
  display: flex;

  width: 100%;
  height: 100%;

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    /* the gradient on top, adjust color and opacity to your taste */
      url(${(props) => TimeIconBackgroundList[props.icon]});

  h1 {
    color: white;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 20px;
  margin-left: 6.875rem;
`;

export const Degrees = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 7.5rem;
    font-weight: 600;

    color: ${(props) => props.theme.white};
  }
`;
export const CityAndHours = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  > span {
    font-size: 3.438rem;
    font-weight: 400;

    color: ${(props) => props.theme.white};
  }

  p {
    color: ${(props) => props.theme.white};
  }
`;

export const WeatherIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > span {
    font-size: 1.5rem;
    font-weight: 200;
    color: ${(props) => props.theme.white};
  }
`;
