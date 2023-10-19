import { motion } from "framer-motion";
import { BsCartPlus } from "react-icons/bs";
import { CgMore } from "react-icons/cg";
import ButtonCard from "./ButtonCard/ButtonCard";
const Card = ({ title, image, price }) => {
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
      <div className="h-[105px] lg:h-[200px] flex items-center">
        <img src={image} alt={title} className="w-[60px] lg:w-[105px]" />
      </div>

      <h2 className="font-Jost  text-sm truncate max-w-[200px]">{title}</h2>
      <div className="flex items-center gap-4">
        <ButtonCard>$ {price}</ButtonCard>
        <ButtonCard>
          <BsCartPlus className="text-2xl" />
        </ButtonCard>
        <ButtonCard>
          <CgMore className="text-2xl" />
        </ButtonCard>
      </div>
    </motion.div>
  );
};

export default Card;
