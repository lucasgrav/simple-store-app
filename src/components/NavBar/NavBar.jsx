import LinksNav from "./Links/LinksNav";
import LogoNav from "./Logo/LogoNav";

const NavBar = () => {
  return (
    <nav className="flex flex-col sm:flex-row sm:justify-around items-center gap-4 bg-[url('/assets/images/footer-bg.webp')] py-6 lg:py-10">
      <LogoNav />
      <LinksNav />
    </nav>
  );
};

export default NavBar;
