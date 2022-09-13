import { render, screen } from "@testing-library/react";
import { SideBarRight } from ".";
import { WeatherLocationDataProps } from "../../../interfaces/weather";

const DataWeatherLocation: WeatherLocationDataProps = {
  temp: "31",
  location: "Goiânia",
  description: "few clouds",
  main: "Clouds",
  icon: "01d",
  humidity: "15",
  windSpeed: 3,
  date: "Monday, September 12 at 11:27 AM",
  temp_max: "34",
  temp_min: "30",
  feels_like: "32",
};

jest.mock("../../../components/Icon");

describe("Side Bar Right Component", () => {
  it("displaying the information correctly", () => {
    render(
      <SideBarRight
        dataInfoDescription={DataWeatherLocation}
        handleSetInfoWeather={() => {}}
      />
    );

    const myElement = screen.getByTestId("side-bar-right");

    expect(myElement).toHaveTextContent("Monday, September 12 at 11:27 AM");
    expect(myElement).toHaveTextContent("15%");
    expect(myElement).toHaveTextContent("31°");
    expect(myElement).toHaveTextContent("34°");
    expect(myElement).toHaveTextContent("30°");
    expect(myElement).toHaveTextContent("32°");
    expect(myElement).toHaveTextContent("3 km/h");
  });
});
