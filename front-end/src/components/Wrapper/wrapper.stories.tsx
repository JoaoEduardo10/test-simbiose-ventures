import { Meta } from "@storybook/react";
import { Wrapper, WrapperProps } from ".";

export default {
  title: "Wrapper",
  component: Wrapper,
  args: {
    children: <h1>test</h1>,
  } as WrapperProps,
} as Meta;

export const TamplateWrapper = (agrs: WrapperProps) => {
  return <Wrapper {...agrs} />;
};
