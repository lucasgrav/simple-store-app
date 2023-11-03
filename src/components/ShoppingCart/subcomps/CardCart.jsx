import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteCartProduct } from "../../../redux/actions";
import { motion } from "framer-motion";
const CardCart = ({ title, image, price, id }) => {
  const dispatch = useDispatch();
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.1,
        delay: 0.1,
      }}
      className="flex items-center justify-center gap-7 text-[#ff4495] font-Jost"
    >
      <img src={image} alt="" className="w-[40px]" />
      <h2 className="truncate w-16">{title}</h2>
      <p className="font-bold">$ {price}</p>
      <AiOutlineDelete
        className="text-xl  md:text-2xl cursor-pointer"
        onClick={() => dispatch(deleteCartProduct(id))}
      />
    </motion.div>
  );
};

export default CardCart;
