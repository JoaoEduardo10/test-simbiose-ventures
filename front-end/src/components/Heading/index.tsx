import { HeadingConteiner } from "./styles";

export type HeadingProps = {
  title: string;
};

export const Heading = ({ title }: HeadingProps) => {
  return <HeadingConteiner>{title}</HeadingConteiner>;
};
