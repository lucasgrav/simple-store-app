import { AiOutlineShoppingCart, AiOutlineExpandAlt } from "react-icons/ai";
import { useSelector } from "react-redux";
import CardCart from "./CardCart/CardCart";
const ShoppingCart = () => {
  const PRODUCTS = useSelector((state) => state.allProducts);
  return (
    <section className="hidden 2xl:flex flex-col border fixed ml-10 mt-16 w-[350px] h-[370px] rounded-lg border-[#ff449546] bg-white shadow-xl">
      <header className="flex flex-col justify-center items-center  text-[#ff4495] border-b-2 p-2 border-[#ff449546]">
        <div className="absolute flex  w-full justify-end p-4 ">
          <AiOutlineExpandAlt className="text-4xl" />
        </div>
        <AiOutlineShoppingCart className="text-5xl" />
      </header>
      <div className="overflow-auto flex flex-col gap-7 py-2 h-[230px] border-b border-[#ff449546] bg-white">
        {PRODUCTS.map((pr) => (
          <CardCart title={pr.title} price={pr.price} image={pr.image} />
        ))}
      </div>
      <footer className="flex items-center justify-center mt-auto mb-auto">
        <button className="bg-[#ff4495] p-2 font-Nunito text-white rounded-lg">
          Shop
        </button>
      </footer>
    </section>
  );
};

export default ShoppingCart;
