import { styled } from "styled-components";

export const ThemeProfileBackground = styled.div`
    width: 100%;
    height: 100%;
    object-fit: cover;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

    background: rgb(44, 40, 113);
    background: linear-gradient(
      90deg,
      rgba(44, 40, 113, 1) 0%,
      rgba(171, 101, 128, 1) 37%,
      rgba(195, 223, 176, 1) 89%,
      rgba(203, 207, 150, 1) 99%
    );
    background-size: 200% 200%;
    animation: wallpaper-anim 2s ease infinite;
  }
`;