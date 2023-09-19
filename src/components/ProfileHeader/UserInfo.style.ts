import { styled } from "styled-components";

export const ThemeUserInfo = styled.div`
    display: inline-flex;
    align-items: center;

    gap: calc(3.8vw - 34px); //? 40 - 1920 | 20 - 1400
    border-top: 1px solid ${(props) => props.theme.colors.lightGray};
    padding-top: 20px;

    .parameter {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;

      border-radius: 12px;
      padding: 10px;
      transition: 200ms;

      &:hover {
        background-color: ${(props) => props.theme.colors.lightGray};
      }

      .value {
        color: ${(props) => props.theme.colors.gray};
      }
    }
  }
`;