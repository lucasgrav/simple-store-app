import { AiOutlineStar } from "react-icons/ai";
const DescriptionDetails = ({ description, category, rate }) => {
  return (
    <section className="flex flex-col justify-center items-center gap-4">
      <p className="font-Jost p-2 lg:max-w-2xl lg:text-xl">{description}</p>
      <div className="flex capitalize items-center font-Jost gap-7">
        <p className="bg-[#ff449546] text-white p-2 rounded-lg">{category}</p>
        <p className="font-bold flex gap-2 items-center">
          <AiOutlineStar className="text-xl text-[#ff4495]" />
          {rate}
        </p>
      </div>
    </section>
  );
};

export default DescriptionDetails;
