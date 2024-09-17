const AutoPlaySettingSwitch = ({ title, isOn, setIsOn }) => {
  return (
    <>
      <span className="md:text-[6px] text-[8px] lg:text-[10px]">{title}</span>
      <div
        className="flex flex-row w-full items-center
                xl:text-[10px] lg:text-[8px] md:text-[6px]"
      >
        <button
          onClick={() => {
            setIsOn(false);
          }}
          className={`mr-[5px]
                    ${isOn ? 'text-black' : 'text-white'}`}
        >
          Off
        </button>
        <div className="flex-auto relative flex h-[8px]">
          <div className="top-0 h-full w-full bg-[black] rounded-[3px]" />
          <div
            className={`absolute w-[20%] bg-white h-full rounded-[3px]
                    ${isOn ? 'right-0' : 'left-0'}`}
          />
        </div>
        <button
          onClick={() => {
            setIsOn(true);
          }}
          className={`ml-[5px]
                    ${isOn ? 'text-white' : 'text-black'}`}
        >
          On
        </button>
      </div>
    </>
  );
};

export default AutoPlaySettingSwitch;
