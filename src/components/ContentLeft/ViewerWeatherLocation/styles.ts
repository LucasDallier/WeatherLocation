import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  flex: 1;
  padding: 5rem 7rem;

  /* Glassmorphism */
  border-radius: 0;
`;

export const City = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    font-size: 2.5rem;
    font-weight: 600;
    color: ${(props) => props.theme.white};
  }
`;

export const Section = styled.div`
  display: flex;

  width: 100%;

  gap: 30px;

  > span {
    display: flex;
    align-items: center;

    color: ${(props) => props.theme.white};
    font-size: 7.5rem;
    font-weight: 600;
  }
`;

export const ContentMoreInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  font-size: 1.25rem;
  font-weight: 200;
  color: ${(props) => props.theme.white};
`;

export const WeatherIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;

  > span {
    font-size: 1.5rem;
    font-weight: 200;
    color: ${(props) => props.theme.white};
  }
`;
