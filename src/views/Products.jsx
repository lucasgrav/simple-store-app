import ContainerProducts from "../components/ContainerProducts/ContainerProducts";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../redux/actions";
const Products = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return <ContainerProducts />;
};

export default Products;
