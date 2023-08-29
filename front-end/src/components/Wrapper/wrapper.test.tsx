import { describe, expect, it } from "vitest";
import { RenderTheme } from "../../styles/render-theme";
import { Wrapper } from ".";
import { screen } from "@testing-library/react";

describe("<Wrapper />", () => {
  it(" should render the wrapper", () => {
    RenderTheme(<Wrapper>children</Wrapper>);

    const wrapper = screen.getByText("children");

    expect(wrapper).toBeInTheDocument();
  });

  it(" should to match snapshot", () => {
    RenderTheme(<Wrapper>children</Wrapper>);

    const wrapper = screen.getByText("children");

    expect(wrapper).toMatchSnapshot();
  });
});
