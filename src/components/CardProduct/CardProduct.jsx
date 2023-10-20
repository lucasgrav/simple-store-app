import { AiOutlineShoppingCart, AiOutlineStar } from "react-icons/ai";
const CardProduct = ({ title, img, price, rating }) => {
  return (
    <article className=" flex w-full gap-7 items-start p-4 border-b border-[#ff449546] sm:justify-center ">
      <div className=" w-[100px] flex justify-center ">
        <img src={img} alt={title} className="w-[50px] md:w-[80px]" />
      </div>
      <div className="w-[60%] flex flex-col gap-4">
        <h2 className="font-Nunito text-sm text-wrap truncate md:text-xl">
          {title}
        </h2>
        <section className="flex items-center font-Jost text-[#ff4495] justify-between md:text-xl">
          <p>$ {price}</p>
          <p className="flex items-center gap-1">
            <AiOutlineStar />
            {rating}
          </p>
          <AiOutlineShoppingCart className="text-xl  md:text-2xl" />
        </section>
      </div>
    </article>
  );
};

export default CardProduct;
