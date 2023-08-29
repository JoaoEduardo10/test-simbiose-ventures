/* eslint-disable indent */
import { css, styled } from "styled-components";

export type MessageConteinerProps = {
  $type: "error" | "ok";
  $state: boolean;
};

const show = (state: MessageConteinerProps["$state"]) => css`
  ${state == true
    ? css`
        transform: translateX(50%);
        opacity: 1;
        animation: keyShow ease-in-out 300ms;

        @keyframes keyShow {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `
    : css`
        transform: translateX(-100%);
        opacity: 0;
        animation: keyShowFalse ease-in-out 1s;

        @keyframes keyShowFalse {
          0% {
            transform: translateX(0%);
            opacity: 1;
          }

          50% {
            transform: translateX(100%);
          }

          100% {
            transform: translateX(-100%);
            opacity: 0;
          }
        }
      `}
`;

export const MessageConteiner = styled.div<MessageConteinerProps>`
  ${({ theme, $type, $state }) => css`
    position: fixed;
    bottom: 20%;
    left: 2%;
    width: 35rem;
    height: 8rem;
    border: none;
    padding: 1rem;
    font-size: 1.4rem;
    background-color: ${theme.colors.secondary_color};
    color: ${theme.colors.blue};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    border: ${$type == "ok" ? "0.1rem solid green" : "0.1rem solid red"};

    ${show($state)}
  `}
`;
