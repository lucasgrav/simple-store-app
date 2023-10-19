import CarrouselHome from "../components/CarrouselHome/CarrouselHome";
import InfoHome from "../components/InfoHome/InfoHome";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../redux/actions";
import CategoriesHome from "../components/CategoriesHome/CategoriesHome";
import InfoSecondaryHome from "../components/InfoSecondaryHome/InfoSecondaryHome";
import { motion } from "framer-motion";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return (
    <>
      <InfoHome />
      <CarrouselHome />
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
          duration: 0.3,
          delay: 0.3,
        }}
      >
        <CategoriesHome />
      </motion.div>
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
          duration: 0.3,
          delay: 0.3,
        }}
      >
        <InfoSecondaryHome />
      </motion.div>
    </>
  );
};

export default Home;
