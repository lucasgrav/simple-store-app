import ButtonShop from "./subcomps/ButtonShop";
import CaptionHome from "./subcomps/CaptionHome";
import DescriptionHome from "./subcomps/DescriptionHome";
import ImageHome from "./subcomps/ImageHome";
import TitleHome from "./subcomps/TitleHome";

const InfoHome = () => {
  return (
    <main className="flex flex-col lg:flex-row justify-around items-center lg:pt-6">
      <img
        src="/assets/images/photo-wish-list.jpg"
        alt=""
        className="lg:w-[280px]  xl:w-[330px] hidden lg:flex"
      />
      <div className="flex flex-col p-4 gap-2 md:items-center ">
        <TitleHome />
        <CaptionHome />
        <ImageHome />
        <DescriptionHome />
        <ButtonShop />
      </div>
      <img
        src="/assets/images/photo-girl-like.jpg"
        alt=""
        className="lg:w-[280px]  xl:w-[330px] hidden lg:flex"
      />
    </main>
  );
};

export default InfoHome;
