import { GET_ALL_PRODUCTS } from "./action-types";
const initialState = {
  allProducts: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //TRAIGO A TODOS LOS POKEMONS
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
      };
    default:
      return { ...state };
  }
};

export default reducer;
