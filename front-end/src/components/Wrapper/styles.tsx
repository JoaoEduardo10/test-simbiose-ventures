import { css, styled } from "styled-components";

export const WrapperConteiner = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.light_gray};
    width: 100%;
    height: 100vh;
  `}
`;
