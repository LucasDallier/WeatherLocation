//INTERFACES
import { IWeatherLocationProps } from "../../interfaces/weather";

//API
import api, { CancelToken } from "../api";

export function getWeatherLocation() {
  const source = CancelToken.source();

  function apiCall({ latitude, longitude }: IWeatherLocationProps) {
    return api.get(
      `/weather?lat=${latitude}&lon=${longitude}&appid=${
        import.meta.env.VITE_APPID
      }&units=metric`,
      { cancelToken: source.token }
    );
  }
  return { source, apiCall };
}
