import { WrapperConteiner } from "./styles";

export type WrapperProps = {
  children: React.ReactNode;
};

export const Wrapper = ({ children }: WrapperProps) => {
  return <WrapperConteiner>{children}</WrapperConteiner>;
};
