import { styled } from "styled-components";

export const ThemeProfileHeader = styled.div`
  grid-area: P;
  height: 440px;
  border-radius: 20px;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.elemsBgc};
  box-shadow: 0 0 10px ${(props) => props.theme.colors.lightGray};
  position: relative;

  .icon-edit {
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 2;

    width: 40px;
    height: 40px;
    fill: white;

    transition: 200ms;

    &:hover {
      filter: drop-shadow(0 0 10px ${(props) => props.theme.colors.primeColor});
    }

    &:active {
      scale: 0.9;
      transition: 100ms;
    }
  }
`;