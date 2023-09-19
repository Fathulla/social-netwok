import { styled } from "styled-components";

export const ThemeUserBlock = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 2;

    width: 100%;
    padding: 20px;
    padding-left: calc(3.9vw + 165px); //? 180 - 375 | 240 - 1920
    background-color: ${(props) => props.theme.colors.elemsBgc};
    border-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: calc(3.2vw + 113px); //? 125 - 375 | 175 - 1920
      height: calc(3.2vw + 113px); //? 125 - 375 | 175 - 1920
      object-fit: cover;
      border: 5px solid ${(props) => props.theme.colors.elemsBgc};
      border-radius: 50%;

      position: absolute;
      top: -56px;
      left: 30px;
    }

    .buttons-wrapper {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
`;