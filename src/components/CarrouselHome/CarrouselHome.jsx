import { useEffect } from "react";
import CardCarrousel from "./CardCarrousel/CardCarrousel";
import useCarrousel from "./CustomHooks/useCarrousel";

const CarrouselHome = () => {

  const { PRODUCTS, index, changeItem } = useCarrousel();

  useEffect(() => {
    changeItem();
  }, [PRODUCTS]);

  useEffect(() => {
    const interval = setInterval(changeItem, 5000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="flex items-center justify-center border-y-2 border-[#ff44951c] h-[250px] p-2 ">
      {PRODUCTS?.length ? (
        <CardCarrousel
          key={PRODUCTS[index].id}
          title={PRODUCTS[index].title}
          image={PRODUCTS[index].image}
          price={PRODUCTS[index].price}
        />
      ) : (
        "loading"
      )}
    </div>
  );
};

export default CarrouselHome;
