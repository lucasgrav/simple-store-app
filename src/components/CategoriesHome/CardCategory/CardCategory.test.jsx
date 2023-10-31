import { render, cleanup, screen } from "@testing-library/react";
import { describe, it, afterEach } from "vitest";
import CardCategory from "./CardCategory";

describe("Card Category", () => {
  afterEach(cleanup);

  it("Should render the component correctly", () => {
    render(<CardCategory>Card</CardCategory>);
  });

  it("Should render the children correctly", () => {
    render(<CardCategory>Card</CardCategory>);

    screen.getByText("Card");
  });
});
