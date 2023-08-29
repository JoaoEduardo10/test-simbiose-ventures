import { css, styled } from "styled-components";

export const ButtonConteiner = styled.button`
  ${({ theme }) => css`
    border: none;
    background-color: ${theme.colors.blue};
    padding: 1rem;
    color: ${theme.colors.secondary_color};
    font-size: 1.4rem;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 300ms ease-in-out;

    &:hover {
      background-color: ${theme.colors.secondary_color};
      color: ${theme.colors.blue};
      border: 0.1rem solid ${theme.colors.blue};
    }
  `}
`;
