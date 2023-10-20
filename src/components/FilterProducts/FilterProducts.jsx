import InputSearch from "./Filters/InputSearch";
import OptionPrice from "./Filters/OptionPrice";
import OptionProducts from "./Filters/OptionProducts";

const FilterProducts = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-4 gap-4 md:flex-row md:gap-2">
      <InputSearch />
      <div className="flex gap-2">
        <OptionProducts />
        <OptionPrice />
      </div>
    </div>
  );
};

export default FilterProducts;
