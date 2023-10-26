import { render, screen, cleanup } from "@testing-library/react";
import { describe, it, afterEach,   expect } from "vitest";
import AboutSimple from "./AboutSimple";

describe("About Simple Description", () => {
  afterEach(cleanup);

  it("Should render the component correctly", () => {
    render(<AboutSimple />);

  });
  it("Should render the title correctly", () => {
    render(<AboutSimple />);
    screen.getByText("SIMPLE-STORE");
    screen.getByText("PROJECT");
  });

     it("Should render the GitHub link correctly", () => {
    render(<AboutSimple />);
    const githubLink = screen.getByRole("link");
    expect(githubLink).toBeTruthy()
    expect(githubLink).toHaveProperty(
      "href",
      "https://github.com/lucasgrav/simple-store-app"
    );
  }); 
});
