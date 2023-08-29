import { describe, expect, it } from "vitest";
import { RenderTheme } from "../../styles/render-theme";
import { Message } from ".";
import { screen } from "@testing-library/react";

describe("<Message />", () => {
  it("should render the message with type of error", () => {
    RenderTheme(
      <Message state={true} title="mensagem de error" type="error" />
    );

    const message = screen.getByRole("alert");

    expect(message).toHaveTextContent("mensagem de error");
    expect(message).toHaveStyleRule("border", "0.1rem solid red");
  });

  it("should render the message with type of ok", () => {
    RenderTheme(<Message state={true} title="mensagem de ok" type="ok" />);

    const message = screen.getByRole("alert");

    expect(message).toHaveTextContent("mensagem de ok");
    expect(message).toHaveStyleRule("border", "0.1rem solid green");
  });

  it("should render the error message popping up", () => {
    RenderTheme(
      <Message state={true} title="mensagem de error" type="error" />
    );

    const message = screen.getByRole("alert");

    expect(message).toHaveTextContent("mensagem de error");
    expect(message).toHaveStyleRule("animation", "keyShow ease-in-out 300ms");
  });

  it("should render the ok message disappearing", () => {
    RenderTheme(<Message state={false} title="mensagem de ok" type="error" />);

    const message = screen.getByRole("alert");

    expect(message).toHaveTextContent("mensagem de ok");
    expect(message).toHaveStyleRule("animation", "keyShowFalse ease-in-out 1s");
  });

  it("should to match snaptshot error", () => {
    RenderTheme(
      <Message state={true} title="mensagem de error" type="error" />
    );

    const message = screen.getByRole("alert");

    expect(message).toMatchSnapshot();
  });

  it("should to match snaptshot ok", () => {
    RenderTheme(<Message state={true} title="mensagem de ok" type="ok" />);

    const message = screen.getByRole("alert");

    expect(message).toMatchSnapshot();
  });
});
