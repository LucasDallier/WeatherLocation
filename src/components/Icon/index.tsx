import { SVGProps } from "react";

import {
  ReactDay,
  ReactNight,
  ReactRainy,
  ReactRainySun,
  ReactThunder,
  ReactSnowy,
  ReactCloudy,
  ReactCloudyDay,
  ReactCloudyNight,
  ReactIconLocation,
  ReactIconRefresh,
  ReactHumidity,
  ReactThermometerCelsius,
  ReactThermometerColder,
  ReactThermometerWarmer,
  ReactThermometer,
  ReactWind,
  ReactMist,
} from "../../assets";

import { IStatusTime, ITimeIconListProps } from "../../interfaces/weather";

type IIcons = ITimeIconListProps & IStatusTime;

interface IIconProps extends SVGProps<SVGSVGElement> {
  code?: keyof IIcons;
}

export function Icon({ code = "01d", ...rest }: IIconProps) {
  const codeMapping = {
    "01d": ReactDay,
    "01n": ReactNight,
    "02d": ReactCloudyDay,
    "02n": ReactCloudyNight,
    "03d": ReactCloudyDay,
    "03n": ReactCloudyNight,
    "04d": ReactCloudyDay,
    "04n": ReactCloudyNight,
    "09d": ReactRainy,
    "09n": ReactRainy,
    "10d": ReactRainySun,
    "10n": ReactRainy,
    "11d": ReactThunder,
    "11n": ReactThunder,
    "13d": ReactSnowy,
    "13n": ReactSnowy,
    "50d": ReactMist,
    reactIconLocation: ReactIconLocation,
    reactIconRefresh: ReactIconRefresh,
    reactHumidity: ReactHumidity,
    reactThermometerCelsius: ReactThermometerCelsius,
    reactThermometerColder: ReactThermometerColder,
    reactThermometerWarmer: ReactThermometerWarmer,
    reactThermometer: ReactThermometer,
    reactWind: ReactWind,
  };

  const ReactIcon = codeMapping[code];

  return <ReactIcon height="80" width="80" {...rest} />;
}
