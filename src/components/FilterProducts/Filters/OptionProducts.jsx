const OptionProducts = () => {
  const CATEGORIES = [
    "Men's clothing",
    "Women's clothing",
    "Electronics",
    "Jewelry",
  ];
  return (
    <section>
      <select class="block p-2 px-1 text-sm text-[#ff4495] font-Nunito cursor-pointer font-semibold border-[#ff449546] bg-transparent border rounded-lg border-b-2  appearance-non focus:outline-none focus:ring-0 focus:border-[#ff4495] peer">
        <option selected>Category</option>
        {CATEGORIES.map((title) => (
          <option>{title}</option>
        ))}
      </select>
    </section>
  );
};

export default OptionProducts;
