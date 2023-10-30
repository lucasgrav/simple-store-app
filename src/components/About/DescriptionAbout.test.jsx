import { render, cleanup } from "@testing-library/react";
import { describe, it, afterEach } from "vitest";
import DescriptionAbout from "./DescriptionAbout";

describe("Description About", () => {
    afterEach(cleanup);
  
    it("Should render the component correctly", () => {
      render(<DescriptionAbout />);
    });
  
  });
  