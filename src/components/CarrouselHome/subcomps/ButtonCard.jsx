const ButtonCard = ({ children }) => {
  return (
    <p className="bg-gradient-to-b from-[#ff4495] to-[#ff6d6d] text-white rounded-full p-2 font-Jost text-sm ease-in-out duration-200 lg:hover:scale-105 cursor-pointer">
      {children}
    </p>
  );
};

export default ButtonCard;
