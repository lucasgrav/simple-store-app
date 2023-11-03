import SocialNetworks from "./subcomps/SocialNetworks";
import NavigationFooter from "./subcomps/NavigationFooter";
import ContactUs from "./subcomps/ContactUs";
import DesignBy from "./subcomps/DesignBy";
const Footer = () => {
  return (
    <footer className=" bg-[url('/assets/images/footer-bg.webp')] flex flex-col gap-4 lg:flex-row  lg:justify-around lg:p-16 mt-auto">
      <SocialNetworks />
      <NavigationFooter />
      <ContactUs />
      <DesignBy />
    </footer>
  );
};
export default Footer;
