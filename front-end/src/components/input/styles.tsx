import { css, styled } from "styled-components";

export const InputConteiner = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
    width: 90%;
  `}
`;

export const Label = styled.label<{ $touchedLabel: boolean }>`
  ${({ $touchedLabel }) => css`
    left: 0;
    top: 0;
    font-size: 1.4rem;
    ${$touchedLabel ? "display: none;" : "display: block;"}
    text-transform: capitalize;
    cursor: pointer;
  `}
`;

export const Input = styled.input<{ $touchedInput: boolean }>`
  ${({ theme, $touchedInput }) => css`
    height: 3rem;
    width: 23rem;
    outline: none;
    padding: 0 1rem;
    border-radius: 0.5rem;
    border: none;
    border: 0.1rem solid
      ${!$touchedInput ? theme.colors.primary_color : "transparent"};
  `}
`;
