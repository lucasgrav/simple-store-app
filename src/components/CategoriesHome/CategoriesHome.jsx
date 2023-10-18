import CardCategory from "./CardCategory/CardCategory";
import useCategories from "./CustomHook/useCategories";

const CategoriesHome = () => {
  const { CATEGORIES } = useCategories();
  return (
    <section className=" bg-[url('/assets/images/footer-bg.webp')]">
      <h2 className="font-Nunito text-2xl font-bold text-center m-4 text-[#192839]">
        ¿ What type of products do we sell ?
      </h2>
      <div className="grid grid-cols-2 gap-2 m-2 pb-7">
        {CATEGORIES?.map((category, index) => (
          <CardCategory key={index}>
            <div className="flex flex-col justify-center items-center gap-2">
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
