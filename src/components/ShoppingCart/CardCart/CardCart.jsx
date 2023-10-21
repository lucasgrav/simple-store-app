const CardCart = ({ title, image, price }) => {
  return (
    <div className="flex items-center justify-center gap-7 text-[#ff4495] font-Jost">
      <img src={image} alt="" className="w-[40px]"/>
      <h2 className="truncate w-16">{title}</h2>
      <p className="font-bold">$ {price}</p>
    </div>
  );
};

export default CardCart;
