import { BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";
const DesignBy = () => {
  return (
    <section className="flex flex-col items-center my-4 lg:my-0 lg:justify-start lg:gap-2">
      <div className="text-[#5e5e5e] text-4xl flex gap-4 py-2 lg:py-0">
        <BiLogoLinkedin />
        <BiLogoGithub />
      </div>

      <p className="flex font-Jost gap-2 text-[#5e5e5e]">
        Developed by<strong className="text-[#ff4495]">Lucas Correa</strong>
      </p>
      <p className="flex font-Jost gap-4 text-[#5e5e5e]">
        Copyright ©2023 All rights reserved
      </p>
    </section>
  );
};

export default DesignBy;
