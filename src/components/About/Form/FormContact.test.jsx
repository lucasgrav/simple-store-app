import { render, screen, cleanup, waitFor } from "@testing-library/react";
import { describe, it, afterEach, expect } from "vitest";
import FormContact from "./FormContact";

describe("Form contact", () => {
  afterEach(cleanup);

  it("Should render the component correctly", () => {
    render(<FormContact />);
  });

  it("Should render the title correctly", () => {
    render(<FormContact />);
    const title = screen.getByRole("heading", { name: "Contact me" });
    expect(title).toBeTruthy();
  });

  it("Should render the label email correctly", () => {
    render(<FormContact />);
    screen.getByText("Your Email Address");
  });

  it("Should render the input email correctly", () => {
    render(<FormContact />);
    const input = screen.getByRole("textbox", { name: "Your Email Address" });
    expect(input).toHaveProperty("id", "email");
    expect(input).toBeTruthy();
  });

  it("Should render the text area correctly", () => {
    render(<FormContact />);
    const input = screen.getByRole("textbox", { name: "" });
    expect(input).toHaveProperty("id", "message");
    expect(input).toBeTruthy();
  });

  it("Should render the button submit correctly", () => {
    render(<FormContact />);
    const button = screen.getByRole("button", { name: "Submit" });
    expect(button).toHaveProperty("type", "submit");
    expect(button).toBeTruthy();
  });
});
