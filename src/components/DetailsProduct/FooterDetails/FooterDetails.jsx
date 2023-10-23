import { AiOutlineShoppingCart, AiOutlineStar } from "react-icons/ai";
const FooterDetails = ({price}) => {
  return      <div className="flex flex-col justify-center items-center gap-4 lg:flex-row">
  <p className="font-Jost font-bold text-2xl">$ {price}</p>
  <button className="p-2 bg-[#ff4495] mb-2 rounded-lg flex items-center justify-center">
    <AiOutlineShoppingCart className="text-4xl  text-white " />
  </button>
</div>
};

export default FooterDetails;
