const AutoPlaySettingBetPercent = ({
  title,
  step = 5,
  percent,
  setPercent,
  revert = false,
  barColor = 'white',
  classNames = ''
}) => {
  const style = ['border-[#1c2127]', 'bg-[#1c2127] text-white border-[#1c2127]'];
  return (
    <>
      <span className="md:text-[6px] text-[8px] lg:text-[10px]">{title}</span>
      <div
        className={`flex flex-row w-full items-center
                xl:text-[10px] lg:text-[8px] md:text-[6px]
                ${classNames || ''}`}
      >
        <button
          onClick={() => {
            setPercent(0);
          }}
          className={`rounded-l-[8px] border
                px-[4px] py-[8px] ${revert ? style[1] : style[0]}`}
        >
          RESET
        </button>
        <button
          onClick={() => {
            setPercent(percent + step);
          }}
          className={`border
                px-[4px] py-[8px] ${revert ? style[0] : style[1]}`}
        >
          INCREASE
        </button>
        <span
          className={`rounded-r-[8px] flex
                py-[8px] justify-center relative border
                flex-auto`}
          style={{ backgroundColor: barColor, borderColor: barColor }}
        >
          {percent}
          <span className="absolute right-[4px]">%</span>
        </span>
      </div>
    </>
  );
};

export default AutoPlaySettingBetPercent;
