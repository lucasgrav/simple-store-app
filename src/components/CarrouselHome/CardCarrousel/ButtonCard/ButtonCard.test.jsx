import { render, screen, cleanup } from "@testing-library/react";
import { describe, it, afterEach} from "vitest";
import ButtonCard from "./ButtonCard";

describe("Button card carrousel", () => {
  afterEach(cleanup);

  it("Should render the button correctly", () => {
    render(<ButtonCard>Button</ButtonCard>).debug();
  });

  it("Should render the children correctly", () => {
    render(<ButtonCard>Button</ButtonCard>);
    screen.getByText("Button");
  });
});
