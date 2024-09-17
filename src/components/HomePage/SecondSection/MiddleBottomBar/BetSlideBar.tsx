import XPBar from '../../../../shared/XPBar';

const BetSlideBar = () => {
  return (
    <div className="flex flex-row items-center gap-[1px] text-white h-[18px] rounded-[5px]">
      <XPBar
        color="#f8bf60"
        className="rounded-0"
        containterClass="!skew-x-0 md:!w-[6px] lg:!w-[8px] xl:!w-[10px] !flex-none xl:!h-[7px] lg:!h-[5.6px] md:!h-[5.2px] !w-[20px]
			"
        shadowClass="!top-[3px]"
      />
      <XPBar
        color="#f8bf60"
        className="rounded-0"
        containterClass="!skew-x-0 xl:!h-[3px] md:!h-[2px] !h-[3px]"
        shadowClass="!top-[3px]"
      />
      <XPBar
        color="#f8bf60"
        className="rounded-0"
        containterClass="!skew-x-0 md:!w-[6px] lg:!w-[8px] xl:!w-[10px] !flex-none xl:!h-[7px] lg:!h-[5.6px] md:!h-[5.2px] !w-[20px]"
      />
      <div className="flex flex-row items-center flex-none">
        <XPBar
          color="#f8bf60"
          className="rounded-0"
          containterClass="!skew-x-0 md:!w-[13px] !flex-none xl:!h-[3px] md:!h-[2px] !w-[15px]"
          shadowClass="!top-[3px]"
        />
        <XPBar
          color="#f8bf60"
          className="rounded-0"
          containterClass="!skew-x-0 !w-[30px] !h-[14px] xl:!w-[20px] lg:!w-[16px] md:!w-[12px] !flex-none xl:!h-[9px] lg:!h-[7.2px] md:!h-[5.4px]"
        />
        <XPBar
          className="rounded-0"
          containterClass="!skew-x-0 md:!w-[3px] !w-[10px] !h-[3px] !flex-none xl:!h-[3px] md:!h-[2px]"
          shadowClass="!top-[3px]"
        />
      </div>
      <XPBar
        className="rounded-0"
        containterClass="!skew-x-0 md:!w-[6px] lg:!w-[8px] xl:!w-[10px] !flex-none xl:!h-[7px] lg:!h-[5.6px] md:!h-[5.2px] !w-[20px]"
      />
      <XPBar
        className="rounded-0"
        containterClass="!skew-x-0  xl:!h-[3px] md:!h-[2px] !h-[3px]"
        shadowClass="!top-[3px]"
      />
      <XPBar
        className="rounded-0"
        containterClass="!skew-x-0 md:!w-[6px] lg:!w-[8px] xl:!w-[10px] !flex-none xl:!h-[7px] lg:!h-[5.6px] md:!h-[5.2px] !w-[20px]"
      />
      <XPBar
        className="rounded-0"
        containterClass="!skew-x-0  xl:!h-[3px] md:!h-[2px] !h-[3px]"
        shadowClass="!top-[3px]"
      />
      <XPBar
        className="rounded-0"
        containterClass="!skew-x-0 md:!w-[6px] lg:!w-[8px] xl:!w-[10px] !flex-none xl:!h-[7px] lg:!h-[5.6px] md:!h-[5.2px] !w-[20px]"
      />
    </div>
  );
};

export default BetSlideBar;
