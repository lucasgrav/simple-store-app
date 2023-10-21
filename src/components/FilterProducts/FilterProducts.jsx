import { useEffect } from "react";
import InputSearch from "./Filters/InputSearch";
import OptionPrice from "./Filters/OptionPrice";
import OptionProducts from "./Filters/OptionProducts";
import { useDispatch } from "react-redux";
import { getAllCategories } from "../../redux/actions";
import ButtonResetFilters from "./Filters/ButtonReset";

const FilterProducts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
  }, []);
  return (
    <div className="flex flex-col items-center justify-center mt-4 gap-4 md:flex-row md:gap-2">
      <InputSearch />
      <div className="flex gap-2">
        <OptionProducts />
        <OptionPrice />
        <ButtonResetFilters />
      </div>
    </div>
  );
};

export default FilterProducts;
