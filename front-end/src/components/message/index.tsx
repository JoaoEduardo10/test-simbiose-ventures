import { MessageConteiner } from "./styles";

export type MessageProps = {
  title: string;
  type: "error" | "ok";
  state: boolean;
};

export const Message = ({ state, title, type }: MessageProps) => {
  return (
    <MessageConteiner role="alert" $type={type} $state={state}>
      {title}
    </MessageConteiner>
  );
};
