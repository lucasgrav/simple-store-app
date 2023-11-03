import { Link } from "react-router-dom";

const ButtonShop = () => {
  return (
    <div className="flex justify-center lg:p-4">
      <Link
        to="/products"
        className="font-Nunito bg-gradient-to-b from-[#ff4495] to-[#ff6d6d] text-white rounded-lg text-center w-24 p-2 font-semibold ease-in-out duration-200 lg:hover:scale-105"
      >
        Shop Now
      </Link>
    </div>
  );
};

export default ButtonShop;
