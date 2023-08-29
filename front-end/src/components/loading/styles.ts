import { css, styled } from "styled-components";

export const LoadingConteiner = styled.button`
  ${() => css`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 0;
  `}
`;

export const CicleOne = styled.div`
  ${({ theme }) => css`
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    border: 0.4rem solid ${theme.colors.blue};
    border-top: 0.4rem solid transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: cicleOne infinite ease-in-out 1s;

    @keyframes cicleOne {
      0% {
        transform: rotate(360deg);
      }

      100% {
        transform: translate(0deg);
      }
    }
  `}
`;

export const CicleTwo = styled.div`
  ${() => css`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: 0.2rem solid green;
    border-bottom: 0.2rem solid transparent;
    animation: cicleTwo infinite ease-in-out reverse 300ms;

    @keyframes cicleTwo {
      0% {
        transform: rotate(360deg);
      }

      100% {
        transform: translate(0deg);
      }
    }
  `}
`;
