import { describe, expect, it, vi } from "vitest";
import { RenderTheme } from "../../styles/render-theme";
import { Button } from ".";
import { fireEvent, screen } from "@testing-library/react";

describe("<Button />", () => {
  const handleClick = vi.fn();

  it("should render the button with type button", () => {
    RenderTheme(
      <Button text="button" type="button" handleClick={handleClick} />
    );

    const button = screen.getByRole("button", { name: "button" });

    expect(button).toHaveAttribute("type", "button");
  });

  it("should render the button with type submi", () => {
    RenderTheme(
      <Button text="button" type="submit" handleClick={handleClick} />
    );

    const button = screen.getByRole("button", { name: "button" });

    expect(button).toHaveAttribute("type", "submit");
  });

  it("should click the button", () => {
    RenderTheme(
      <Button text="button" type="submit" handleClick={handleClick} />
    );

    const button = screen.getByRole("button", { name: "button" });

    expect(handleClick).not.toHaveBeenCalled();

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalled();
  });

  it("should click to macth sotnapsh", () => {
    RenderTheme(
      <Button text="button" type="submit" handleClick={handleClick} />
    );

    const button = screen.getByRole("button", { name: "button" });

    expect(button).toMatchSnapshot();
  });
});
