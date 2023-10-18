import { PiDressFill, PiTelevisionSimpleBold } from "react-icons/Pi";
import { FaTshirt } from "react-icons/fa";
import { GiPearlNecklace } from "react-icons/gi";
const useCategories = () => {
  const CATEGORIES = [
    { title: "Men's clothing", logo: <FaTshirt className="text-4xl" /> },
    { title: "Women's clothing", logo: <PiDressFill className="text-4xl" /> },
    {
      title: "Electronics",
      logo: <PiTelevisionSimpleBold className="text-4xl" />,
    },
    { title: "Jewelry", logo: <GiPearlNecklace className="text-4xl" /> },
  ];
  return { CATEGORIES };
};

export default useCategories;
