import { render, screen, cleanup } from "@testing-library/react";
import { describe, it, afterEach, expect } from "vitest";
import AboutSimple from "../../components/About/AboutSimple/AboutSimple";

describe("About Simple Description", () => {
  afterEach(cleanup);

  it("Should render the component correctly", () => {
    render(<AboutSimple />);
  });

  it("Should render the title correctly", () => {
    render(<AboutSimple />);
    const title = screen.getByRole("heading", { name: "SIMPLE-STORE PROJECT" });
    expect(title).toBeTruthy();
  });

  it("Should render the image correctly", () => {
    render(<AboutSimple />);
    const imageGirl = screen.getByRole("img", { name: "Girl jumping" });
    expect(imageGirl).toBeTruthy();
    expect(imageGirl).toHaveProperty(
      "src",
      "/assets/images/photo-girl-like.jpg"
    );
  });

  it("Should render the paragraph correctly", () => {
    render(<AboutSimple />);

    const paragraph = screen.getByText(
      /is a fake e-commerce website that fetches all its information from the/i
    );

    expect(paragraph).toBeTruthy();
  });
  it("Should render the GitHub link correctly", () => {
    render(<AboutSimple />);
    const githubLink = screen.getByRole("link");
    expect(githubLink).toBeTruthy();
    expect(githubLink).toHaveProperty(
      "href",
      "https://github.com/lucasgrav/simple-store-app"
    );
  });

  it("Should render the GitHub SVG correctly", () => {
    render(<AboutSimple />);
    const githubLink = screen.getByRole("link", {
      href: "https://github.com/lucasgrav/simple-store-app",
    });
    const githubSVG = githubLink.querySelector("svg");
    expect(githubSVG).toBeTruthy();
  });
});
