import { Link } from "react-router-dom";

const ButtonShop = () => {
  return (
    <div className="flex justify-center">
      <Link
        to="/products"
        className="font-Nunito bg-gradient-to-b from-[#ff4495] to-[#ff6d6d] text-white rounded-lg text-center w-24 p-2 font-semibold"
      >
        Shop Now
      </Link>
    </div>
  );
};

export default ButtonShop;
