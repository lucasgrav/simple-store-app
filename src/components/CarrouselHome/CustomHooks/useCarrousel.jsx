import { useState} from "react";
import { useSelector } from "react-redux";

const useCarrousel = () => {
  const PRODUCTS = useSelector((state) => state.allProducts);

  const [index, setIndex] = useState(0);

  const changeItem = () => {
    if (index >= PRODUCTS?.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return { PRODUCTS, index, changeItem };
};

export default useCarrousel;
