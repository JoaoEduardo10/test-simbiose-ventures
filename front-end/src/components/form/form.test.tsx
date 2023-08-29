/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, expect, it, vi } from "vitest";
import { RenderTheme } from "../../styles/render-theme";
import { Form } from ".";
import { act, fireEvent, screen } from "@testing-library/react";

describe("<Form />", () => {
  vi.useFakeTimers();

  it("should render the Form", () => {
    RenderTheme(<Form />);

    const button = screen.getByRole("button");
    const inputs = screen.getAllByLabelText("input");

    expect(button).toBeInTheDocument();
    expect(inputs.length).toBe(3);
  });

  it("should return an error for not adding a name", () => {
    RenderTheme(<Form />);

    const button = screen.getByRole("button");

    fireEvent.click(button);

    const message = screen.getByRole("alert");

    expect(message).toHaveTextContent("adicione um nome");
  });

  it("message must come out after time", () => {
    RenderTheme(<Form />);

    const button = screen.getByRole("button");

    fireEvent.click(button);

    const message = screen.getByRole("alert");

    expect(message).toHaveTextContent("adicione um nome");

    act(() => {
      vi.advanceTimersByTime(3000);
    });

    expect(screen.getByRole("alert")).toHaveStyleRule(
      "animation",
      "keyShowFalse ease-in-out 1s"
    );
  });

  it("should return an error for not adding an email", () => {
    RenderTheme(<Form />);

    const button = screen.getByRole("button");
    const inputs = screen.getAllByLabelText("input");

    fireEvent.change(inputs[0].lastChild as any, {
      target: { value: "eduardo" },
    });

    fireEvent.click(button);

    const message = screen.getByRole("alert");

    expect(message).toHaveTextContent("adicione um email");
  });

  it("should return an error for not adding a date", () => {
    RenderTheme(<Form />);

    const button = screen.getByRole("button");
    const inputs = screen.getAllByLabelText("input");

    fireEvent.change(inputs[0].lastChild as any, {
      target: { value: "eduardo" },
    });
    fireEvent.change(inputs[1].lastChild as any, {
      target: { value: "eduardo@gmail.com" },
    });

    fireEvent.click(button);

    const message = screen.getByRole("alert");

    expect(message).toHaveTextContent("adicione a sua data de nacimento");
  });

  it("should return a database creation error", () => {
    const mockFetch = (global.fetch = vi.fn());

    mockFetch.mockReturnValue({
      ok: false,
      json: () => Promise.resolve(""),
    } as any);

    RenderTheme(<Form />);

    const button = screen.getByRole("button");
    const inputs = screen.getAllByLabelText("input");

    fireEvent.change(inputs[0].lastChild as any, {
      target: { value: "eduardo" },
    });
    fireEvent.change(inputs[1].lastChild as any, {
      target: { value: "eduardo@gmail.com" },
    });

    fireEvent.change(inputs[2].lastChild as any, {
      target: { value: "2023-08-14" },
    });

    fireEvent.click(button);
  });

  it("should successfully create the user", async () => {
    const mockFetch = (global.fetch = vi.fn());

    mockFetch.mockReturnValue({
      ok: true,
      json: () => Promise.resolve(""),
    } as any);

    RenderTheme(<Form />);

    const button = screen.getByRole("button");
    const inputs = screen.getAllByLabelText("input");

    fireEvent.change(inputs[0].lastChild as any, {
      target: { value: "eduardo" },
    });
    fireEvent.change(inputs[1].lastChild as any, {
      target: { value: "eduardo@gmail.com" },
    });

    fireEvent.change(inputs[2].lastChild as any, {
      target: { value: "2023-08-14" },
    });

    fireEvent.click(button);
  });
});
