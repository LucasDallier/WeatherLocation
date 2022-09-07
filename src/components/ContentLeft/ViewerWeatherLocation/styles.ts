import styled from "styled-components";

import Sunset from "../../../assets/background-weather/sunset.jpg";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-image: url(${Sunset});

  h1 {
    color: white;
  }
`;
