import { BsCartPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addCart } from "../../../redux/actions";
const FooterDetails = ({ price, id }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col justify-center items-center gap-4 lg:flex-row">
      <p className="font-Jost font-bold text-2xl">$ {price}</p>
      <button className="p-2 bg-[#ff4495] mb-2 rounded-lg flex items-center justify-center">
        <BsCartPlus
          className="text-4xl  text-white "
          onClick={() => dispatch(addCart(id))}
        />
      </button>
    </div>
  );
};

export default FooterDetails;
