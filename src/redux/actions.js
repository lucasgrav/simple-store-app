import { GET_ALL_PRODUCTS } from "./action-types";
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