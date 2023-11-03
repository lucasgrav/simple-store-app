import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import CardCart from "./subcomps/CardCart";
import uuid from "react-uuid";
import ModalPurchase from "../ModalPurchase/ModalPurchase";

const ShoppingCart = () => {
  const PRODUCTS = useSelector((state) => state.cartShop);
  const PRICE = useSelector((state) => state.priceTotal);

  return (
    <section className="hidden 2xl:flex flex-col border fixed ml-10 mt-16 w-[350px] h-[370px] rounded-lg border-[#ff449546] bg-white shadow-xl">
      <header className="flex flex-col justify-center items-center  text-[#ff4495] border-b-2 p-2 border-[#ff449546]">
        <AiOutlineShoppingCart className="text-5xl" />
      </header>
      <div className="overflow-auto flex flex-col gap-7 py-2 h-[230px] border-b border-[#ff449546] bg-white">
        {PRODUCTS.length > 0 ? (
          PRODUCTS.map((pr) => (
            <CardCart
              key={uuid()}
              title={pr.title}
              price={pr.price}
              image={pr.image}
              id={pr.id}
            />
          ))
        ) : (
          <div className="flex w-full h-full justify-center items-center">
            <p className="font-bold font-Nunito text-gray-400">
              There are no products in the cart.
            </p>
          </div>
        )}
      </div>
      <footer className="flex items-center  mt-auto mb-auto justify-around">
        <p className="font-Jost  text-[#ff4495]">
          TOTAL: $ {Math.round(PRICE)}
        </p>

        <ModalPurchase products={PRODUCTS.length > 0} />
      </footer>
    </section>
  );
};

export default ShoppingCart;
