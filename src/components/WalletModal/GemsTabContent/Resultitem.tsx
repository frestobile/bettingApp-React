const Resultitem = ({ text, unit, value }) => {
  return (
    <div className="flex flex-row justify-between w-full">
      <span>{text}</span>
      <span className="flex items-center gap-[3px]">
        {value}
        <span className="text-[#f8bf60]">{unit}</span>
      </span>
    </div>
  );
};

export default Resultitem;
