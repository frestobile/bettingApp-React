import Icon from '../../shared/Icon';

const BottomBar = () => {
  return (
    <div className="w-full flex flex-col">
      <input
        name="message"
        type="input"
        className="
                    bg-[#1C2127]
                    rounded-[5px]
                    px-[10px] py-[10px]
                    text-white outline-none  
                    xl:text-[16px] md:text-[12.8px] md:text-[9.6px] text-[8px]
                    mb-[5px] mt-[10px] mx-[8px]"
        placeholder="Send a message"
      />
      <div
        className="flex flex-row items-center text-[#E7B25B] justify-between
        xl:text-[14px] lg:text-[11.2px] md:text-[8.4px] text-[7px]
                    mx-[8px]"
      >
        <Icon raw color="#E7B25B" className="" name="Circle" />
        &nbsp;
        {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
          .format(5250)
          .replace('$', '')
          .replace(/\..*/g, '')}
        <div className="flex flex-row mx-[10px] items-center gap-[5px]">
          <Icon
            color="#E7B25B"
            size={20}
            className="bg-[#1C2127] rounded-[10px] p-[4px]"
            name="twitter"
          />
          <Icon
            color="#E7B25B"
            size={20}
            className="bg-[#1C2127] rounded-[10px] p-[4px]"
            name="youtube"
          />
          <Icon
            color="#E7B25B"
            size={20}
            className="bg-[#1C2127] rounded-[10px] p-[4px]"
            name="instagram"
          />
          <Icon
            color="#E7B25B"
            size={20}
            className="bg-[#1C2127] rounded-[10px] p-[4px]"
            name="facebook"
          />
        </div>
        <button
          type="button"
          className="
                        bg-[#F8BF60]
                        text-black rounded-[5px]
                        px-[12px] py-[6px]
                        hover:mix-blend-difference
                        transition duration-[100ms]
                        active:translate-y-[3px]
                "
        >
          Chat
        </button>
      </div>
    </div>
  );
};

export default BottomBar;
