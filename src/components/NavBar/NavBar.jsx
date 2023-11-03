import LinksNav from "./subcomps/LinksNav";
import LogoNav from "./subcomps/LogoNav";

const NavBar = () => {
  return (
    <nav className="flex flex-col sm:flex-row sm:justify-around items-center gap-4 bg-[url('/assets/images/footer-bg.webp')] py-6 lg:py-10">
      <LogoNav />
      <LinksNav />
    </nav>
  );
};

export default NavBar;
