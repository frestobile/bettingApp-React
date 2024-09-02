const NewBetItem = ({ children, type, value }) => {
  return (
    <div className="flex flex-row text-white h-[40px] gap-[1px] mt-[4px]">
      <div className="bg-[#1c2127] flex-auto flex flex-row items-center relative justify-center rounded-l-[5px]">
        <button className="flex flex-row items-center gap-[2px] md:text-[10px] absolute left-[10px]">
          {children}
        </button>
        <span className="text-[#f8bf60] mr-[3px]">{type}</span>
        {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
          .format(value)
          .replace('$', '')}
      </div>
      <div className="bg-[#1c2127] md:text-[9px] flex-none w-[40px] flex items-center justify-center">
        1/2
      </div>
      <div className="bg-[#1c2127] md:text-[9px] flex-none w-[40px] flex items-center justify-center rounded-r-[5px]">
        x2
      </div>
    </div>
  );
};

export default NewBetItem;
