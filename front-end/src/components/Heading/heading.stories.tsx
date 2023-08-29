import { Meta } from "@storybook/react";
import { Heading, HeadingProps } from ".";

export default {
  title: "Heading",
  component: Heading,
  args: {
    title: "texto test",
  } as HeadingProps,
} as Meta;

export const TamplateHeading = (agrs: HeadingProps) => {
  return <Heading {...agrs} />;
};
