import { ButtonConteiner } from "./styles";

export type ButtonProps = {
  text: string;
  handleClick?: () => void;
  type: "button" | "submit";
};

export const Button = ({ text, type, handleClick }: ButtonProps) => {
  const handleButtonClick = () => {
    if (handleClick) {
      handleClick();
    }
  };

  return (
    <ButtonConteiner type={type} onClick={handleButtonClick}>
      {text}
    </ButtonConteiner>
  );
};
