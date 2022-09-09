import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;
  gap: 20px;
  max-width: 30%;
  height: 100%;
  padding: 5rem 2rem;

  /* Glassmorphism */
  background: rgb(0 0 0 / 38%);
  border-radius: 0;
  box-shadow: 0px 0px 5px rgb(0 0 0 / 60%);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
`;

export const SectionRightTop = styled.div`
  display: flex;
  flex-direction: column;

  gap: 20px;

  padding: 3rem 0rem;
  border-top: 1px solid ${(props) => props.theme["gray-300"]};
  border-bottom: 1px solid ${(props) => props.theme["gray-300"]};

  h3 {
    color: ${(props) => props.theme.white};
    font-weight: 600;
  }

  > span {
    font-size: 1.35rem;
    font-weight: 200;

    color: ${(props) => props.theme.white};
  }
`;

export const BoxButtons = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;

  height: 100%;
`;

//Variable created in order not to repeat the code for styling components whose styles are "equal", changing only their width.
export const stylesButton = css`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 10px;
  width: 14vw;
  height: 3.125rem;
  padding: 0 2rem;

  border-radius: 0.5rem;
  background: ${(props) => props.theme["bluish-green"]};

  font-weight: 500;
  text-transform: uppercase;
  color: ${(props) => props.theme.white};

  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  will-change: transform;

  margin-bottom: 50px;

  > svg {
    width: 25px;
    height: 25px;
  }

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  }

  &:active {
    box-shadow: none;
    transform: translateY(0);
    filter: brightness(0.9);
  }
`;

export const BtnLocation = styled.button`
  ${stylesButton}
`;

export const BtnRefresh = styled.button`
  ${stylesButton}
  width: 9vw;
`;

export const DescriptionInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  > div {
    display: flex;
    align-items: center;
    gap: 10px;

    > span {
      color: ${(props) => props.theme.white};
    }

    > span:last-child {
      margin-left: 5px;
    }

    > svg {
      width: 50px;
      height: 50px;
      margin-left: -20px;
    }

    #wind {
      margin-left: 0px;
    }
  }

  /* p {
    color: ${(props) => props.theme.white};

    span {
      margin-left: 20px;
    }
  } */
`;
