import { useEffect } from "react";
import InputSearch from "./subcomps/InputSearch";
import OptionPrice from "./subcomps/OptionPrice";
import OptionProducts from "./subcomps/OptionProducts";
import { useDispatch } from "react-redux";
import { getAllCategories } from "../../redux/actions";
import ButtonResetFilters from "./subcomps/ButtonReset";

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
