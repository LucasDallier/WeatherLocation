import { useCallback, useState } from "react";
import { ViewerWeatherLocation } from "../components/ContentLeft/ViewerWeatherLocation";
import SideBarRight from "../components/ContentRight/SideBarRight";
import {
  IWeatherLocationProps,
  WeatherLocationDataProps,
} from "../interfaces/weather";
import { getWeatherLocation } from "../services/endpoints/weatherLocation";
import { Container } from "./styles";

export function Home() {
  const [dataWeatherLocation, setDataWeatherLocation] =
    useState<WeatherLocationDataProps>({
      temp: "--",
      location: "--",
      description: "--",
      main: "--",
      icon: "01d",
      date: "--",
    });

  const handleSetInfoWeather = useCallback(async () => {
    const { apiCall } = getWeatherLocation();

    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      hour: "numeric",
      minute: "numeric",
      month: "long",
      day: "numeric",
    };

    const today = new Date().toLocaleDateString("en-US", options);

    navigator.geolocation.getCurrentPosition(async (position) => {
      try {
        const { data } = await apiCall({
          latitude: position.coords?.latitude || -23.5489,
          longitude: position.coords?.longitude || -46.6388,
        });

        console.log("data", data);

        setDataWeatherLocation({
          temp: Math.round(data.main.temp),
          location: data.name,
          description: data.weather[0].description,
          main: data.weather[0].main,
          icon: data.weather[0].icon,
          date: today,
        });
      } catch (error) {}
    });
  }, []);

  console.log("dataWeatherLocation", dataWeatherLocation);

  return (
    <Container>
      <ViewerWeatherLocation dataWeatherLocation={dataWeatherLocation} />
      <SideBarRight handleSetInfoWeather={handleSetInfoWeather} />
    </Container>
  );
}
