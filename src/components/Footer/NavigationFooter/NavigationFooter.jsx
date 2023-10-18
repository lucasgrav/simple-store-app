import { Link } from "react-router-dom";

const NavigationFooter = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <h2 className="font-Nunito font-bold text-xl">Navigation</h2>
      <div className="flex font-Jost gap-4 text-[#5e5e5e]">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </section>
  );
};
export default NavigationFooter;
