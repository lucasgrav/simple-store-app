import { BiSolidShoppingBagAlt } from "react-icons/bi";

const LogoNav = () => {
  return (
    <div className="flex items-center justify-start px-2 gap-2 mt-2">
      <BiSolidShoppingBagAlt className="text-3xl text-[#ff4495] lg:text-5xl" />
      <h2 className="font-Nunito text-center text-[#192839] text-2xl font-bold lg:text-3xl ">
        Simple Store
      </h2>
    </div>
  );
};

export default LogoNav;
