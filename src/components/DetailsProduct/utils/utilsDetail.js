import axios from "axios";
export const getProduct = async (id, setProduct) => {
  try {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setProduct(data);
  } catch (error) {
    console.error(error);
  }
};
