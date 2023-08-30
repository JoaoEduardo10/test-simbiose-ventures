import { css, styled } from "styled-components";

import { ButtonConteiner } from "../button/styles";
import { InputConteiner } from "../input/styles";

export const FormConteiner = styled.form`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondary_color};
    display: flex;
    gap: 1rem;
    margin: 0 auto;
    width: 70%;
    height: 9rem;
    border-radius: 1rem;
    align-items: center;
    padding: 0 1.6rem;
    border: 0.1rem solid ${theme.colors.primary_color};
    box-shadow: 0px 2px 55px -31px rgba(0, 0, 0, 0.75);

    ${ButtonConteiner} {
      margin-top: 1.2rem;
    }

    ${theme.media_screen_size.tablet} {
      width: 80%;

      ${InputConteiner} {
        width: 95%;
      }
    }

    ${theme.media_screen_size.phone} {
      width: 80%;
      height: 30rem;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      ${InputConteiner} {
        width: 100%;

        input {
          width: 100%;
        }
      }
    }

    ${theme.media_screen_size.small_phones} {
      width: 80%;
      height: 30rem;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      ${InputConteiner} {
        width: 100%;

        input {
          width: 100%;
        }
      }
    }
  `}
`;
