const ItemTabDivision = ({ classname = "", children, onClick }) => {
  return (
      <a
          href="#"
          onClick={onClick}
          className={`hover:bg-[#EDEDED] px-3 py-1 rounded-full transition duration-300 ease-in-out ${classname}`}
      >
          {children}
      </a>
  );
};

export default ItemTabDivision;
