import { render, cleanup } from "@testing-library/react";
import { describe, it, afterEach } from "vitest";
import DescriptionAbout from "../../components/About/DescriptionAbout";

describe("Description About", () => {
    afterEach(cleanup);
  
    it("Should render the component correctly", () => {
      render(<DescriptionAbout />);
    });
  
  });
  