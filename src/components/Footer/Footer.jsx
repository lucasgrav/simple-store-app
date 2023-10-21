import SocialNetworks from "./SocialNetworks/SocialNetworks";
import NavigationFooter from "./NavigationFooter/NavigationFooter";
import ContactUs from "./ContactUs/ContactUs";
import DesignBy from "./DesignBy/DesignBy";
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
