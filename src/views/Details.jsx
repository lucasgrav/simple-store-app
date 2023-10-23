import { useParams } from "react-router-dom";
import DetailsProduct from "../components/DetailsProduct/DetailsProduct";
import { motion } from "framer-motion";
const Details = () => {
  const { id } = useParams();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <DetailsProduct id={id} />
    </motion.div>
  );
};
export default Details;
