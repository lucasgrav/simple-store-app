import {
  GET_ALL_PRODUCTS,
  GET_ALL_CATEGORIES,
  FILTER_CATEGORIES,
  SORT_PRICE,
  RESET_FILTERS,
  SEARCH_PRODUCT,
  ADD_CART,
  DELETE_CART_PRODUCT,
} from "./action-types";
const initialState = {
  allProducts: [],
  allProductsSearched: [],
  productsBackUp: [],
  allCategories: [],
  cartShop: [],
  priceTotal: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //ALL PRODUCTS OF API
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
        productsBackUp: action.payload,
        allProductsSearched: action.payload,
      };

    //ALL CATEGORIES OF API
    case GET_ALL_CATEGORIES:
      return {
        ...state,
        allCategories: action.payload,
      };

    //FILTER PRODUCTS BY CATEGORY
    case FILTER_CATEGORIES:
      let productsFilter;
      action.payload !== "all"
        ? (productsFilter = state.productsBackUp.filter(
            (product) => product.category === action.payload
          ))
        : (productsFilter = state.productsBackUp);
      return {
        ...state,
        allProducts: productsFilter,
      };

    //FILTER PRODUCTS BY HIGHEST O LOWER PRICE
    case SORT_PRICE:
      let orderPrice;
      if (action.payload === "highest") {
        orderPrice = [...state.allProducts].sort((a, b) =>
          b.price > a.price ? 1 : -1
        );
      } else if (action.payload === "lowest") {
        orderPrice = [...state.allProducts].sort((a, b) =>
          a.price > b.price ? 1 : -1
        );
      }
      return {
        ...state,
        allProducts: orderPrice,
      };

    // RESET ALL FILTER
    case RESET_FILTERS:
      return {
        ...state,
        allProducts: state.productsBackUp,
      };
    // SEARCH PRODUCT
    case SEARCH_PRODUCT:
      let searchString = action.payload.toLowerCase();
      let productSearched = state.productsBackUp.filter((product) =>
        product.title.toLowerCase().includes(searchString)
      );
      return {
        ...state,
        allProductsSearched: productSearched,
        allProducts:
          productSearched.length > 0 ? productSearched : state.productsBackUp,
      };
    // SEARCH PRODUCT
    case ADD_CART:
      let cartProductsFilter = state.productsBackUp.filter(
        (product) => product.id === action.payload
      );
      return {
        ...state,
        cartShop: [...state.cartShop, cartProductsFilter[0]],
        priceTotal: state.priceTotal + cartProductsFilter[0].price,
      };

    case DELETE_CART_PRODUCT:
      // Encuentra el índice del primer producto con el ID especificado
      const indexToDelete = state.cartShop.findIndex(
        (product) => product.id === action.payload
      );

      if (indexToDelete !== -1) {
        // Crea una copia del arreglo cartShop
        const updatedCart = [...state.cartShop];

        // Elimina el producto en el índice encontrado
        let deletedItem = updatedCart.splice(indexToDelete, 1);

        return {
          ...state,
          cartShop: updatedCart,
          priceTotal: state.priceTotal - deletedItem[0].price,
        };
      }
    default:
      return { ...state };
  }
};

export default reducer;
