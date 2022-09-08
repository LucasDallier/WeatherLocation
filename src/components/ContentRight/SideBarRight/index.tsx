import { ReactIconLocation, ReactIconRefresh } from "../../../assets";
import { Container, BoxButtons, Btn } from "./styles";

export function SideBarRight({
  handleSetInfoWeather,
}: {
  handleSetInfoWeather: () => {};
}) {
  return (
    <Container>
      <BoxButtons>
        <Btn type="button" onClick={handleSetInfoWeather}>
          <ReactIconLocation />
          Current Location
        </Btn>
        <Btn type="button" onClick={handleSetInfoWeather}>
          <ReactIconRefresh />
          Refresh
        </Btn>
      </BoxButtons>
    </Container>
  );
}

export default SideBarRight;
