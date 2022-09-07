import { ViewerWeatherLocation } from "../components/ContentLeft/ViewerWeatherLocation";
import SideBarRight from "../components/ContentRight/SideBarRight";
import { Container } from "./styles";

export function Home() {
  // window.navigator.geolocation.getCurrentPosition(console.log, console.log);
  return (
    <Container>
      <ViewerWeatherLocation />
      <SideBarRight />
    </Container>
  );
}
