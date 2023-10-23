import {
  GET_ALL_CATEGORIES,
  GET_ALL_PRODUCTS,
  FILTER_CATEGORIES,
  SORT_PRICE,
  RESET_FILTERS,
  SEARCH_PRODUCT,
  ADD_CART,
  DELETE_CART_PRODUCT,
} from "./action-types";
import axios from "axios";

export const getAllProducts = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      dispatch({ type: GET_ALL_PRODUCTS, payload: data });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getAllCategories = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      dispatch({ type: GET_ALL_CATEGORIES, payload: data });
    } catch (error) {
      console.error(error);
    }
  };
};

export const filterCategories = (category) => {
  return { type: FILTER_CATEGORIES, payload: category };
};

export const sortPrice = (value) => {
  return { type: SORT_PRICE, payload: value };
};
export const resetFilters = () => {
  return { type: RESET_FILTERS };
};
export const searchProduct = (value) => {
  return { type: SEARCH_PRODUCT, payload: value };
};

export const addCart = (id) => {
  return { type: ADD_CART, payload: id };
};
export const deleteCartProduct = (id) => {
  return { type: DELETE_CART_PRODUCT, payload: id };
};
