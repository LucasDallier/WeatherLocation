import api, { CancelToken } from "../api";

interface IWeatherLocationProps {
  latitude: number;
  longitude: number;
  appid: string;
}

export function getWeatherLocation() {
  const source = CancelToken.source();

  function apiCall({ latitude, longitude }: IWeatherLocationProps) {
    return api.post(
      `/weather?lat=${latitude}&lon=${longitude}&appid=8430edd85db9afa05e042b34b80bdae5`,
      {
        latitude: latitude,
        longitude: longitude,
        appid: "8430edd85db9afa05e042b34b80bdae5",
      },
      { cancelToken: source.token }
    );
  }

  return { source, apiCall };
}
