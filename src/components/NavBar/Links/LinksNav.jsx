import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const LinksNav = () => {
  const LOCATION = useLocation();
  const LINKS = ["home", "products", "contact"];

  return (
    <ul className="flex justify-around gap-4 px-4 bg-[#ff4495] rounded-lg">
      {LINKS.map((link, index) => (
        <Link
          key={index}
          to={link === "home" ? "/" : link}
          className={`${
            LOCATION.pathname === `/${link}` ? "font-normal border-b-2 border-white" : "font-light"
          } ${
            LOCATION.pathname === "/" && link === "home"
              ? "font-normal border-b-2 border-white"
              : "font-light"
          } capitalize text-center text-white text-md font-Jost m-2 sm:w-24 sm:text-xl ease-in-out duration-100 lg:hover:scale-105 lg:hover:font-normal`}
        >
          {link}
        </Link>
      ))}
    </ul>
  );
};

export default LinksNav;
