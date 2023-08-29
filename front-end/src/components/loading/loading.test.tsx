import { describe, expect, it } from "vitest";
import { RenderTheme } from "../../styles/render-theme";
import { Loading } from ".";
import { screen } from "@testing-library/react";

describe("<Loading />", () => {
  it("should render the loading component", () => {
    RenderTheme(<Loading />);

    const loading = screen.getByLabelText("loading");

    expect(loading.firstChild).toHaveStyleRule(
      "animation",
      "cicleOne infinite ease-in-out 1s"
    );
  });

  it("should to match snapshot", () => {
    RenderTheme(<Loading />);

    const loading = screen.getByLabelText("loading");

    expect(loading).toMatchSnapshot();
  });
});
