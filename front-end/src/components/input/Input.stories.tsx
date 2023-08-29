import { Meta } from "@storybook/react";
import { InputComponent, InputComponentProps } from ".";

export default {
  title: "InputComponent",
  component: InputComponent,
  args: {
    text: "name",
    type: "text",
    handleValue(value) {
      console.log(value);
    },
    value: "joao",
    readOnly: false,
    touchedLabe: false,
  } as InputComponentProps,
} as Meta;

const handleValue = (value: string) => {
  console.log(value);
};

export const TamplateInputComponentForForms = (agrs: InputComponentProps) => {
  return <InputComponent {...agrs} />;
};

export const TamplateInputComponentForVisualization = (
  agrs: InputComponentProps
) => {
  return (
    <InputComponent
      {...agrs}
      handleValue={handleValue}
      readOnly={true}
      text="email"
      type="email"
      touchedLabe={true}
      value="email"
    />
  );
};
