import { Meta } from "@storybook/react";
import { Message, MessageProps } from ".";

export default {
  title: "Message",
  component: Message,
  args: {
    state: true,
    type: "ok",
    title: "ok",
  } as MessageProps,
} as Meta;

export const TamplateMessageWithTypeOk = (agrs: MessageProps) => {
  return <Message {...agrs} />;
};

export const TamplateMessageWithTypeError = (agrs: MessageProps) => {
  return <Message {...agrs} type="error" title="error" />;
};
