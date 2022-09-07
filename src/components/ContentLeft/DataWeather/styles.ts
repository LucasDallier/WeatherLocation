import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const Degrees = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 7.5rem;
    font-weight: 600;
    color: ${(props) => props.theme.white};
  }
`;
export const CityAndHours = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  > span {
    font-size: 1.25rem;
    font-weight: 200;
    color: ${(props) => props.theme.white};
  }
`;
export const WeatherIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > span {
    font-size: 1.5rem;
    font-weight: 200;
  }
`;
