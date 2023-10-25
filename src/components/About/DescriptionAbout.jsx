import AboutSimple from "./AboutSimple/AboutSimple";
import FormContact from "./Form/FormContact";
const DesciptionAbout = () => {
  return (
    <main className="flex flex-col justify-center items-center h-full mt-auto gap-2 2xl:flex-row">
      <AboutSimple />
      <FormContact />
    </main>
  );
};
export default DesciptionAbout;
