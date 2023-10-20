import ContainerProducts from "../components/ContainerProducts/ContainerProducts";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../redux/actions";
import FilterProducts from "../components/FilterProducts/FilterProducts";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";
const Products = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return (
    <main>
      <FilterProducts />
      
      <ShoppingCart/>
      <ContainerProducts />;
      
     
    </main>
  );
};

export default Products;
