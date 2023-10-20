import { AiOutlineShoppingCart } from "react-icons/ai";
const ShoppingCart = () => {
  return (
    <section className="hidden xl:flex flex-col border fixed ml-16 mt-16 h-[300px] w-[200px] 2xl:w-[300px] 2xl:h-[400px] rounded-lg border-[#ff449546] bg-white shadow-xl">
      <header className="flex justify-center items-center text-5xl text-[#ff4495] border-b-2 p-2 border-[#ff449546]">
        <AiOutlineShoppingCart />
      </header>
      <p></p>
    </section>
  );
};

export default ShoppingCart;
