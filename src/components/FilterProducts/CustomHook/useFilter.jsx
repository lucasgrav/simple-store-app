import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  filterCategories,
  sortPrice,
  resetFilters,
} from "../../../redux/actions";

const useFilter = () => {
  const dispatch = useDispatch();

  const [category, setCategory] = useState("default");
  const [price, setPrice] = useState("default");

  const handleFilterCategory = (event) => {
    setCategory(event.target.value);
    dispatch(filterCategories(event.target.value));
  };
  const handleFilterPrice = (event) => {
    setPrice(event.target.value);
    dispatch(sortPrice(event.target.value));
  };

  const resetAllFilters = () => {
    setCategory("default");
    setPrice("default");
    dispatch(resetFilters());
  };
  return {
    handleFilterCategory,
    handleFilterPrice,
    resetAllFilters,
    category,
    price,
  };
};

export default useFilter;
