import { useState } from "react";
import { useSelector } from "react-redux";

const useCarrousel = () => {
  const PRODUCTS = useSelector((state) => state.productsBackUp);

  const [index, setIndex] = useState({
    cardOne: 0,
    cardTwo: 1,
    cardThree: 2,
    cardFour: 3,
  });

  const changeItem = () => {
    setIndex((prevIndex) => ({
      cardOne: (prevIndex.cardOne >= PRODUCTS.length - 1) ? 0 : prevIndex.cardOne + 1,
      cardTwo: (prevIndex.cardTwo >= PRODUCTS.length - 1) ? 1 : prevIndex.cardTwo + 1,
      cardThree: (prevIndex.cardThree >= PRODUCTS.length - 1) ? 2 : prevIndex.cardThree + 1,
      cardFour: (prevIndex.cardFour >= PRODUCTS.length - 1) ? 3 : prevIndex.cardFour + 1,
    }));
  };

  return { PRODUCTS, index, changeItem };
};

export default useCarrousel;
