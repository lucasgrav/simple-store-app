import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import {
  describe,
  it,
  afterEach,
  afterAll,
  beforeAll,
  beforeEach,
  expect,
} from "vitest";
import store from "../../redux/store";
import { BrowserRouter } from "react-router-dom";
import CardProduct from "./CardProduct";

describe("Card Product", () => {
  let componentRender;
  beforeEach(() => {
    componentRender = render(
      <Provider store={store}>
        <BrowserRouter>
          <CardProduct
            title="Product Title"
            img="image.jpg"
            price={10}
            rating={4}
            id={1}
          />
        </BrowserRouter>
      </Provider>
    );
  });

  afterEach(cleanup);

  beforeAll(() => {
    window.IntersectionObserver = class IntersectionObserver {
      constructor() {}
      observe() {}
      unobserve() {}
      disconnect() {}
    };
  });

  afterAll(() => {
    window.IntersectionObserver = undefined;
  });

  it("Should render the component correctly", () => {
    expect(componentRender).toBeTruthy();
  });

  it("Should render the title correctly", () => {
    const title = screen.getByRole("heading", { name: "Product Title" });
    expect(title).toBeTruthy();
  });

  it("Should render the image correctly", () => {
    const image = screen.getByRole("img", { name: "Product Title" });
    expect(image).toBeTruthy();
    expect(image).toHaveProperty("src", "image.jpg");
  });

  it("Should render the links correctly", () => {
    componentRender.debug();
    const links = screen.getAllByRole("link");
    expect(links).toBeTruthy();

    links.forEach((link) => {
      expect(link.getAttribute("href")).toBe("/details/1");
    });
  });

  it("Should render the price correctly", () => {
    const price = screen.getByText("$ 10");
    expect(price).toBeTruthy();
  });

  it("Should render the rating correctly", () => {
    const rating = screen.getByText("4");
    expect(rating).toBeTruthy();
  });

  it("Should render the SVG correctly", () => {
    expect(componentRender.container.querySelector("svg")).toBeTruthy;
  });

  it("Should dispatch correctly", () => {
    let btn = screen.getByTestId("cart-icon");
    fireEvent.click(btn);
  });
});
