import {  MdPhonelink } from "react-icons/md";
import { FaTshirt } from "react-icons/fa";
import { GiPearlNecklace,GiLargeDress } from "react-icons/gi";
const useCategories = () => {
  const CATEGORIES = [
    { title: "Men's clothing", logo: <FaTshirt className="text-4xl" /> },
    { title: "Women's clothing", logo: <GiLargeDress className="text-4xl" /> },
    {
      title: "Electronics",
      logo: <MdPhonelink className="text-4xl" />,
    },
    { title: "Jewelry", logo: <GiPearlNecklace className="text-4xl" /> },
  ];
  return { CATEGORIES };
};

export default useCategories;
