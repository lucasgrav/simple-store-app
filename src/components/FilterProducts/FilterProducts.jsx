import OptionPrice from "./Filters/OptionPrice";
import OptionProducts from "./Filters/OptionProducts";

const FilterProducts = () => {
  return (
    <div className="flex justify-center mt-4 gap-4">
      <OptionProducts />
      <OptionPrice />
    </div>
  );
};

export default FilterProducts;
