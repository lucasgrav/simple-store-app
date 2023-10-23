import { motion } from "framer-motion";
import { BsCartPlus } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import ButtonCard from "./ButtonCard/ButtonCard";
import { useDispatch } from "react-redux";
import { addCart } from "../../../redux/actions";
import { Link } from "react-router-dom";
const Card = ({ title, image, price, id }) => {
  const dispatch = useDispatch();
  return (
    <motion.div
      className="flex flex-col gap-4 items-center justify-center  min-h-[200px] max-w-[400px]"
      initial={{
        opacity: 0,
        x: 25,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.3,
        delay: 0.3,
      }}
    >
      <Link to={`/details/${id}`}>
        <div className="h-[105px] lg:h-[200px] flex items-center">
          <img src={image} alt={title} className="w-[60px] lg:w-[105px]" />
        </div>
      </Link>
      <h2 className="font-Jost  text-sm truncate max-w-[200px]">{title}</h2>
      <div className="flex items-center gap-4">
        <ButtonCard>$ {price}</ButtonCard>
        <ButtonCard>
          <BsCartPlus
            className="text-2xl"
            onClick={() => dispatch(addCart(id))}
          />
        </ButtonCard>
        <Link to={`/details/${id}`}>
          <ButtonCard>
            <AiOutlineEye className="text-2xl" />
          </ButtonCard>
        </Link>
      </div>
    </motion.div>
  );
};

export default Card;
