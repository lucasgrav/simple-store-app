import { useEffect } from "react";
import CardProduct from "../CardProduct/CardProduct";
import { useSelector } from "react-redux";

const ContainerProducts = () => {
  const PRODUCTS = useSelector((state) => state.allProducts);
  return (
    <main className="flex flex-col items-center gap-7 p-2 md:p-16">
      {PRODUCTS.map((product) => (
        <CardProduct key={product.id} title={product.title} img={product.image} price={product.price} rating={product.rating.rate}/>
      ))}
    </main>
  );
};

export default ContainerProducts;
