//REACT
import { useCallback, useState } from "react";

//INTERFACE
import { WeatherLocationDataProps } from "../interfaces/weather";

//COMPONENTS
import { ViewerWeatherLocation } from "../components/ContentLeft/ViewerWeatherLocation";
import SideBarRight from "../components/ContentRight/SideBarRight";

//SERVICES
import { getWeatherLocation } from "../services/endpoints/weatherLocation";

//STYLES
import { Container } from "./styles";

export function Home() {
  const [dataWeatherLocation, setDataWeatherLocation] =
    useState<WeatherLocationDataProps>({
      temp: "--",
      location: "--",
      description: "--",
      main: "--",
      icon: "01d",
      humidity: "--",
      windSpeed: 0,
      date: "--",
      temp_max: "--",
      temp_min: "--",
      feels_like: "--",
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
          latitude: position.coords?.latitude || 47.3842,
          longitude: position.coords?.longitude || 8.53185,
        });

        console.log("data", data);

        setDataWeatherLocation({
          temp: Math.round(data?.main?.temp) ?? "--",
          location: data?.name || "--",
          description: data?.weather[0]?.description,
          main: data?.weather[0]?.main || "--",
          icon: data?.weather[0]?.icon || "01d",
          humidity: data?.main?.humidity || "--",
          windSpeed: data?.wind?.speed || "--",
          date: today,
          temp_max: data?.main?.temp_max?.toFixed?.(0) ?? "--",
          temp_min: data?.main?.temp_min?.toFixed?.(0) ?? "--",
          feels_like: data?.main?.feels_like?.toFixed?.(0) ?? "--",
        });
      } catch (error) {}
    });
  }, []);

  console.log("dataWeatherLocation", dataWeatherLocation);

  return (
    <Container icon={dataWeatherLocation.icon}>
      <ViewerWeatherLocation dataWeatherLocation={dataWeatherLocation} />
      <SideBarRight
        handleSetInfoWeather={handleSetInfoWeather}
        dataInfoDescription={dataWeatherLocation}
      />
    </Container>
  );
}
