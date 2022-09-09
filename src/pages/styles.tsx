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

interface IContainerProps {
  icon: keyof ITimeBackgroundListProps;
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
  height: 100vh;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${(props) => TimeIconBackgroundList[props.icon]});
`;
