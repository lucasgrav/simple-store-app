import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchProduct } from "../../../redux/actions";

const useSearch = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    dispatch(searchProduct(event.target.value));
  };

 
  return { handleChange, value };
};

export default useSearch;
