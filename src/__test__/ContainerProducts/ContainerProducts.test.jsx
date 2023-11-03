import { render, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import { describe, it, afterEach } from "vitest";
import store from "../../redux/store";
import { BrowserRouter } from "react-router-dom";
import ContainerProducts from "../../components/ContainerProducts/ContainerProducts";

describe("Container products", () => {
  afterEach(cleanup);
  it("Should render the component correctly", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ContainerProducts />
        </BrowserRouter>
      </Provider>
    );
  });
});
