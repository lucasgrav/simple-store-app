import { getProduct } from "./utils/utilsDetail";
import { useEffect, useState } from "react";

import DescriptionDetails from "./subcomps/DescriptionDetails";
import FooterDetails from "./subcomps/FooterDetails";

const DetailsProduct = ({ id }) => {
  const [product, setProduct] = useState();
  useEffect(() => {
    getProduct(id, setProduct);
  }, []);

  return (
    <article className="flex flex-col gap-4 my-7 p-2 lg:flex-row justify-center items-center h-full lg:gap-20">
      <h2 className="font-Nunito font-semibold text-[#ff4495] text-center lg:text-xl lg:hidden">
        {product?.title}
      </h2>
      <img
        src={product?.image}
        alt={product?.title}
        className="w-36 sm:w-48 lg:w-72"
      />

      <div className="flex flex-col gap-12">
        <h2 className="font-Nunito font-semibold text-[#ff4495] text-center hidden lg:text-xl lg:flex  lg:max-w-2xl ">
          {product?.title}
        </h2>
        <DescriptionDetails
          description={product?.description}
          category={product?.category}
          rate={product?.rating.rate}
        />
        <FooterDetails price={product?.price} id={product?.id} />
      </div>
    </article>
  );
};

export default DetailsProduct;
