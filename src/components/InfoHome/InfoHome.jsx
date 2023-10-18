import ButtonShop from "./ButtonShop/ButtonShop";
import CaptionHome from "./Caption/CaptionHome";
import DescriptionHome from "./Description/DescriptionHome";
import ImageHome from "./Image/ImageHome";
import TitleHome from "./Title/TitleHome";

const InfoHome = () => {
  return (
    <main className="flex flex-col">
      <div className="flex flex-col p-4 gap-2">
        <TitleHome />
        <CaptionHome />
        <ImageHome />
        <DescriptionHome />
        <ButtonShop/>
      </div>
    </main>
  );
};

export default InfoHome;
