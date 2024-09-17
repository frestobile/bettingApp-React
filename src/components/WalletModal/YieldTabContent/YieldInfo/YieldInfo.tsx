const YieldInfo = () => {
  return (
    <div
      className="flex flex-row
      md:px-[10px] px-[5px] break-keep whitespace-nowrap
    md:gap-[10px] gap-[5px]
    xl:text-[16px] lg:text-[12.8px] md:text-[9.6px] text-[8px]
    justify-center items-center"
    >
      <span className="flex flex-1 flex-col justify-center items-center">
        <span className="text-[#f8bf60]">APY</span>
        <span className="flex">
          1,059530.08
          <span className="text-[#f8bf60]">% APY</span>
        </span>
      </span>
      <span className="flex flex-1 flex-col justify-center items-center">
        <span className="text-[#f8bf60]">TVL</span>
        <span className="flex">
          <span className="text-[#f8bf60]">$</span>&nbsp; 82,723,167.75
        </span>
      </span>
      <span className="flex flex-1 flex-col justify-center items-center">
        <span className="text-[#f8bf60]">INDEX</span>
        <span className="flex">
          17.96 &nbsp;
          <span className="text-[#f8bf60]">x</span>
        </span>
      </span>
    </div>
  );
};

export default YieldInfo;
