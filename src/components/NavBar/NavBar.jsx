import LinksNav from "./Links/LinksNav";
import LogoNav from "./Logo/LogoNav";

const NavBar = () => {
  return <nav className="flex flex-col sm:flex-row sm:justify-around  ">
    <LogoNav/>
   <LinksNav/>
    </nav>
    ;
};

export default NavBar;
