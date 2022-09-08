import styled from "styled-components";

export const Container = styled.div`
  width: 26vw;
  height: 100%;

  position: absolute;
  right: 0;

  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.12);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
`;

export const BoxButtons = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;

  height: 100%;

  gap: 10px;
`;
export const Btn = styled.button`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 10px;
  width: fit-content;
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

// export const Btn = styled.button`
//   position: relative;

//   display: flex;
//   align-items: center;
//   justify-content: center;

//   gap: 10px;
//   width: fit-content;
//   height: 3.125rem;
//   padding: 0 2rem;

//   border-radius: 0.5rem;
//   background: ${(props) => props.theme["bluish-green"]};

//   font-weight: 500;
//   text-transform: uppercase;
//   color: ${(props) => props.theme.white};

//   transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;
//   will-change: transform;

//   > svg {
//     width: 25px;
//     height: 25px;
//   }

//   &:hover:not(:disabled) {
//     transform: translateY(-2px);
//     box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
//   }

//   &:active {
//     box-shadow: none;
//     transform: translateY(0);
//     filter: brightness(0.9);
//   }
// `;
