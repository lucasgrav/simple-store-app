import CarrouselHome from "../components/CarrouselHome/CarrouselHome";
import InfoHome from "../components/InfoHome/InfoHome";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../redux/actions";
import CategoriesHome from "../components/CategoriesHome/CategoriesHome";
import InfoSecondaryHome from "../components/InfoSecondaryHome/InfoSecondaryHome";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return (
    <>
      <InfoHome />
      <CarrouselHome />
      <CategoriesHome />
      <InfoSecondaryHome/>
    </>
  );
};

export default Home;
