import useFilter from "../CustomHook/useFilter";

const ButtonResetFilters = () => {
  const { resetAllFilters } = useFilter();
  return (
    <button
      onClick={resetAllFilters}
      className="border border-[#ff449546] hover:border-[#ff4495] rounded-lg p-1 px-2 text-sm text-[#ff4495] font-Nunito font-semibold"
    >
      Reset
    </button>
  );
};
export default ButtonResetFilters;
