import { Meta } from "@storybook/react";
import { Button, ButtonProps } from ".";

export default {
  title: "Button",
  component: Button,
  args: {
    text: "button",
    type: "button",
    handleClick: () => console.log("ok"),
  } as ButtonProps,
} as Meta;

export const TamplateButtonTypeButton = (agrs: ButtonProps) => {
  return <Button {...agrs} />;
};

export const TamplateButtonTypeSubmit = (agrs: ButtonProps) => {
  return <Button {...agrs} type="submit" text="submit" />;
};
