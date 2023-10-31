import { render, cleanup, screen } from "@testing-library/react";
import { describe, it, afterEach, expect } from "vitest";
import CategoriesHome from "./CategoriesHome";

describe("Categories Home", () => {
  afterEach(cleanup);

  it("Should render the component correctly", () => {
    render(<CategoriesHome />).debug();
  });

  it("Should render the title correctly", () => {
    render(<CategoriesHome />);
    const title = screen.getByRole("heading", {
      name: "¿ What type of products do we sell ?",
    });
    expect(title).toBeTruthy();
  });

  it("Should render the SVG correctly", () => {
    expect(render(<CategoriesHome />).container.querySelector("svg"))
      .toBeTruthy;
  });

  it("Should render the men's category correctly", () => {
    render(<CategoriesHome />);
    screen.getByText("Men's clothing");
  });
  it("Should render the women's category correctly", () => {
    render(<CategoriesHome />);
    screen.getByText("Women's clothing");
  });
  it("Should render the electronics category correctly", () => {
    render(<CategoriesHome />);
    screen.getByText("Electronics");
  });
  it("Should render the jewelry category correctly", () => {
    render(<CategoriesHome />);
    screen.getByText("Jewelry");
  });
});
