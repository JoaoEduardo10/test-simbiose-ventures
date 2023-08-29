import { describe, expect, it } from "vitest";
import { RenderTheme } from "../../styles/render-theme";
import { Heading } from ".";
import { screen } from "@testing-library/react";

describe("<Heading />", () => {
  it("should render the Heading with Text", () => {
    RenderTheme(<Heading title="test" />);

    const heading = screen.getByRole("heading");

    expect(heading).toHaveTextContent("test");
  });

  it("should rto mactch snapshot", () => {
    RenderTheme(<Heading title="test" />);

    const heading = screen.getByRole("heading");

    expect(heading).toMatchSnapshot();
  });
});
