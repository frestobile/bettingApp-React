import XPBar from '../../shared/XPBar';

const CurrentXpBar = () => {
  return (
    <div className="flex flex-row h-[40px] gap-x-[10px]">
      <div className="text-[white] flex-none flex flex-col justify-center items-center g-y-0 ml-[15px] mr-[5px]">
        <span
          className="leading-none
        text-[8px] md:text-[12px] lg:text-[16px] xl:text-[20px]"
        >
          200%
        </span>
        <span
          className="text-[5px] md:text-[7.8px] xl:text-[13px] lg:text-[10.4px]
        leading-none"
        >
          CURRENT XP
        </span>
      </div>
      <div className="flex flex-row flex-auto items-center md:gap-[3px] gap-[1.5px]">
        <XPBar width={100 + '%'} color="#f8bf60" containterClass="!h-[3px] md:!h-[7px]" />
        <XPBar width={100 + '%'} color="#f8bf60" containterClass="!h-[3px] md:!h-[7px]" />
        <XPBar width={100 + '%'} color="#f8bf60" containterClass="!h-[3px] md:!h-[7px]" />
        <XPBar width={100 + '%'} color="#f8bf60" containterClass="!h-[3px] md:!h-[7px]" />
        <XPBar width={100 + '%'} color="#f8bf60" containterClass="!h-[3px] md:!h-[7px]" />
        <XPBar width={100 + '%'} color="#f8bf60" containterClass="!h-[3px] md:!h-[7px]" />
        <XPBar width={100 + '%'} color="#f8bf60" containterClass="!h-[3px] md:!h-[7px]" />
        <XPBar width={100 + '%'} color="#f8bf60" containterClass="!h-[3px] md:!h-[7px]" />
        <XPBar width={100 + '%'} color="#f8bf60" containterClass="!h-[3px] md:!h-[7px]" />
        <XPBar width={100 + '%'} color="#f8bf60" containterClass="!h-[3px] md:!h-[7px]" />
      </div>
      <div className="text-[white] flex-none flex flex-col justify-center items-center g-y-0 gap-x-[5px]">
        <span className="leading-none text-[8px] md:text-[12px] lg:text-[16px] xl:text-[20px]">
          250%
        </span>
        <span
          className="text-[5px] md:text-[7.8px] xl:text-[13px] lg:text-[10.4px]
        leading-none"
        >
          BONUS XP
        </span>
      </div>
      <div className="flex flex-row flex-auto items-center md:gap-[3px] gap-[1.4px]">
        <XPBar
          width={100 + '%'}
          color="#f8bf60"
          className="rounded-[50px]"
          containterClass="!skew-x-0 !h-[3px] md:!h-[7px]"
        />
        <XPBar
          width={100 + '%'}
          color="#f8bf60"
          className="rounded-[50px]"
          containterClass="!skew-x-0  !h-[3px] md:!h-[7px]"
        />
        <XPBar
          width={100 + '%'}
          color="#f8bf60"
          className="rounded-[50px]"
          containterClass="!skew-x-0  !h-[3px] md:!h-[7px]"
        />
        <XPBar
          width={100 + '%'}
          color="#f8bf60"
          className="rounded-[50px]"
          containterClass="!skew-x-0  !h-[3px] md:!h-[7px]"
        />
        <XPBar
          width={100 + '%'}
          color="#f8bf60"
          className="rounded-[50px]"
          containterClass="!skew-x-0 !h-[3px] md:!h-[7px]"
        />
      </div>
      <div className="text-[white] flex-none flex flex-col justify-center items-center g-y-0 gap-x-[5px] ml-[5px] mr-[15px]">
        <span className="leading-none text-[8px] md:text-[12px] lg:text-[16px] xl:text-[20px]">
          5
        </span>
        <span
          className="text-[5px] md:text-[7.8px] xl:text-[13px] lg:text-[10.4px]
        leading-none"
        >
          STREAK
        </span>
      </div>
    </div>
  );
};

export default CurrentXpBar;
