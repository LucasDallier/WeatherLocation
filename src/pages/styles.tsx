import styled from "styled-components";

import BackgroundBrokenClouds from "../assets/background-weather/background-broken-clouds.jpg";
import BackgroundFewCloudsNight from "../assets/background-weather/background-few-clouds-night.jpg";
import BackgroundFewClouds from "../assets/background-weather/background-few-clouds.jpg";
import BackgroundMist from "../assets/background-weather/background-mist.jpg";
import BackgroundScatteredClouds from "../assets/background-weather/background-scattered clouds.jpg";
import BackgroundShowerRain from "../assets/background-weather/background-shower-rain.jpg";
import BackgroundSnowDay from "../assets/background-weather/background-snow-day.jpg";
import BackgroundSnowNight from "../assets/background-weather/background-snow-night.jpg";
import BackgroundThunderStorm from "../assets/background-weather/background-thunder-storm.jpg";
import { ITimeIconListProps } from "../interfaces/weather";

interface IContainerProps {
  icon: keyof ITimeIconListProps;
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

export const Container = styled.div<IContainerProps>`
  display: flex;
  align-items: center;

  width: 100%;
  height: 100%;

  overflow-y: auto;

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${(props) => TimeIconBackgroundList[props.icon]});
`;
