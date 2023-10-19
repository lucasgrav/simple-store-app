import CardCategory from "./CardCategory/CardCategory";
import useCategories from "./CustomHook/useCategories";

const CategoriesHome = () => {
  const { CATEGORIES } = useCategories();
  return (
    <section className=" bg-[url('/assets/images/footer-bg.webp')] lg:p-10">
      <h2 className="font-Nunito text-2xl font-bold text-center m-4 text-[#192839] lg:text-4xl lg:p-4">
        ¿ What type of products do we sell ?
      </h2>
      <div className="grid grid-cols-2 gap-2 m-2 pb-7 justify-items-center sm:grid-cols-4 lg:flex lg:justify-center lg:gap-20">
        {CATEGORIES?.map((category, index) => (
          <CardCategory key={index}>
            <div className="flex flex-col justify-center items-center gap-2 lg:text-2xl">
              {category.logo}
              {category.title}
            </div>
          </CardCategory>
        ))}
      </div>
    </section>
  );
};

export default CategoriesHome;
