import { useEffect } from "react";
import CardCarrousel from "./CardCarrousel/CardCarrousel";
import useCarrousel from "./CustomHooks/useCarrousel";
import { Progress } from "@nextui-org/react";

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
    <div className="flex items-center justify-center border-y-2 border-[#ff44951c] h-[250px] lg:h-[350px] p-2 ">
      {PRODUCTS?.length ? (
        <div className="flex justify-center gap-16">
          <CardCarrousel
            id={PRODUCTS[index.cardOne].id}
            key={PRODUCTS[index.cardOne].title}
            title={PRODUCTS[index.cardOne].title}
            image={PRODUCTS[index.cardOne].image}
            price={PRODUCTS[index.cardOne].price}
          />
          <div className="hidden sm:flex">
            <CardCarrousel
              id={PRODUCTS[index.cardOne].id}
              key={PRODUCTS[index.cardTwo].id}
              title={PRODUCTS[index.cardTwo].title}
              image={PRODUCTS[index.cardTwo].image}
              price={PRODUCTS[index.cardTwo].price}
            />
          </div>
          <div className="hidden lg:flex">
            <CardCarrousel
              id={PRODUCTS[index.cardOne].id}
              key={PRODUCTS[index.cardThree].id}
              title={PRODUCTS[index.cardThree].title}
              image={PRODUCTS[index.cardThree].image}
              price={PRODUCTS[index.cardThree].price}
            />
          </div>
          <div className="hidden xl:flex">
            <CardCarrousel
              id={PRODUCTS[index.cardOne].id}
              key={PRODUCTS[index.cardFour].id}
              title={PRODUCTS[index.cardFour].title}
              image={PRODUCTS[index.cardFour].image}
              price={PRODUCTS[index.cardFour].price}
            />
          </div>
        </div>
      ) : (
        <Progress
        size="sm"
        isIndeterminate
        aria-label="Loading..."
        className="max-w-md"
        color="danger"
      />
      )}
    </div>
  );
};

export default CarrouselHome;
