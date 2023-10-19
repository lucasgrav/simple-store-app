import { Link } from "react-router-dom";
const LinksNav = () => {
  const LINKS = ["home", "products", "contact"];

  return (
    <ul className="flex justify-around  m-2 bg-gradient-to-b from-[#ff4495] to-[#ff6d6d] rounded-lg">
      {LINKS.map((link, index) => (
        <Link
          key={index}
          to={link === "home" ? "/" : link}
          className="capitalize text-center text-white text-md font-Jost font-light rounded-2xl  m-2 sm:w-24 sm:text-xl ease-in-out duration-100 lg:hover:scale-105"
        >
          {link}
        </Link>
      ))}
    </ul>
  );
};

export default LinksNav;
