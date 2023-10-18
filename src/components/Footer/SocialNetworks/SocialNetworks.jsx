import { BiSolidShoppingBagAlt } from "react-icons/bi";
import { BsInstagram, BsYoutube, BsFacebook } from "react-icons/bs";

const SocialNetworks = () => {
  return    <section className="flex flex-col gap-4 justify-center items-center py-7">
  <BiSolidShoppingBagAlt className="text-4xl text-[#ff4495]" />
  <div className="flex gap-4 text-xl text-[#9c9c9c]">
    <BsInstagram />
    <BsYoutube />
    <BsFacebook />
  </div>
</section>
};

export default SocialNetworks;
