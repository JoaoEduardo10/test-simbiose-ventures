/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, expect, it, vi } from "vitest";
import { RenderTheme } from "../../styles/render-theme";
import { InputComponent } from ".";
import { fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "jest-styled-components";
import { theme } from "../../styles/theme";

describe("<InputComponent />", () => {
  const handleValue = vi.fn();

  it("should render input to form", () => {
    RenderTheme(
      <InputComponent
        handleValue={handleValue}
        value="name"
        text="name"
        type="text"
      />
    );

    const input = screen.getByPlaceholderText("name");

    expect(input).toBeInTheDocument();
    expect(input).toHaveStyleRule(
      "border",
      `0.1rem solid ${theme.colors.primary_color}`
    );
  });

  it("should render the input to view the value", () => {
    RenderTheme(
      <InputComponent
        handleValue={handleValue}
        value="name"
        text="name"
        type="text"
        readOnly={true}
        touchedLabe={true}
      />
    );

    const input = screen.getByPlaceholderText("name") as any;

    expect(input.value).toBe("name");
    expect(input).toHaveStyleRule("border", "0.1rem solid transparent");
  });

  it("should write to input", () => {
    RenderTheme(
      <InputComponent
        handleValue={handleValue}
        value="name"
        text="name"
        type="text"
      />
    );

    const input = screen.getByPlaceholderText("name") as any;

    expect(handleValue).toHaveBeenCalledWith("");

    fireEvent.change(input, { target: { value: "test" } });

    expect(handleValue).toHaveBeenCalledWith("test");
  });

  it("should to match snapshot ", () => {
    const { container } = RenderTheme(
      <InputComponent
        handleValue={handleValue}
        value="name"
        text="name"
        type="text"
      />
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
