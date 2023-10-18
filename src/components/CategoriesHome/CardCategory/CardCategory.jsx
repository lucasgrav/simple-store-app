const CardCategory = ({ children }) => {
  return (
    <article className="h-36 text-center shadow-[1px_0px_7px_0px_#0000002b]  bg-gradient-to-b from-[#ff4495] to-[#ff6d6d] rounded-lg flex items-center justify-center font-Nunito font-bold text-white">
      {children}
    </article>
  );
};

export default CardCategory;
