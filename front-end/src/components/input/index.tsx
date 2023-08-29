/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { InputConteiner, Input, Label } from "./styles";

export type InputComponentProps = {
  type: "text" | "email" | "date";
  text: string;
  readOnly?: boolean;
  touchedLabe?: boolean;
  handleValue: (value: string) => void;
  value: string;
};

export const InputComponent = ({
  text,
  type,
  readOnly = false,
  handleValue,
  value,
  touchedLabe = false,
}: InputComponentProps) => {
  const [actualValue, setActualValue] = useState("");

  useEffect(() => {
    handleValue(actualValue);
  }, [actualValue]);

  return (
    <InputConteiner aria-label="input">
      <Label htmlFor={type} $touchedLabel={touchedLabe}>
        {text}
      </Label>
      <Input
        $touchedInput={readOnly}
        type={type}
        id={type}
        readOnly={readOnly}
        value={value}
        placeholder={value}
        onChange={({ target }) => setActualValue(target.value)}
      />
    </InputConteiner>
  );
};
