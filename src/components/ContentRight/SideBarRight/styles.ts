import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;

  max-width: 30%;
  height: 100%;

  padding: 5rem 2rem;

  /* Glassmorphism */
  background: rgb(0 0 0 / 38%);
  border-radius: 0;
  box-shadow: 0px 0px 5px rgb(0 0 0 / 60%);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);

  @media (max-height: 720px) {
    height: none;

    padding: 0rem 2rem;
  }
  @media (max-height: 900px) {
    padding: 0rem 2rem;
  }
`;

export const SectionRightTop = styled.div`
  display: flex;
  flex-direction: column;

  gap: 20px;

  padding: 1.5rem 0rem;

  border-bottom: 1px solid ${(props) => props.theme["gray-300"]};

  > h3 {
    color: ${(props) => props.theme.white};
    font-weight: 600;
  }

  > span {
    font-size: 1.35rem;
    font-weight: 200;

    color: ${(props) => props.theme.white};
  }

  @media (max-height: 720px) {
    gap: 5px;

    padding: 1.7rem 0rem;
  }
`;

export const BoxButtons = styled.div`
  display: flex;
  justify-content: space-around;

  padding: 1.5rem 0rem;
  margin-top: 15px;

  @media (max-height: 720px) {
    height: none;

    padding: 0rem;
  }
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

  text-transform: uppercase;
  color: ${(props) => props.theme.white};

  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  will-change: transform;

  margin-bottom: 50px;

  > span {
    font-size: 0.875em;
    font-weight: 500;
  }

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

  @media (max-height: 720px) {
    padding: 0 1rem;

    > span {
      font-size: 0.75rem;
    }

    > svg {
      width: 18px;
      height: 18px;
    }
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
`;
