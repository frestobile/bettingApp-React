import Icon from '../../shared/Icon';
import XPBar from '../../shared/XPBar';

const LevelBar = ({ level }) => {
  return (
    <div
      className="flex flex-row
    xl:h-[35px] lg:h-[28px] md:h-[21px]
    gap-[10px]"
    >
      <div
        className="text-[#cd5334] flex-none flex flex-row justify-center items-center gap-[5px] ml-[10px]
      text-[7px] md:text-[12px] lg:text-[16px] xl:text-[20px]"
      >
        LEVEL {level}
        <Icon
          name="star"
          color="#cd5334"
          className="xl:h-[14px] lg:h-[11.2px] md:h-[8.4px]
          xl:w-[14px] lg:w-[11.2px] md:w-[8.4px]
          w-[7px] h-[7px] "
          raw
        />
      </div>
      <div className="flex flex-row flex-auto items-center md:gap-[6px] gap-[2.5px]">
        <XPBar width={100 + '%'} color="#f8bf60" />
        <XPBar width={100 + '%'} color="#f8bf60" />
        <XPBar width={100 + '%'} color="#f8bf60" />
        <XPBar width={100 + '%'} color="#f8bf60" />
        <XPBar width={100 + '%'} color="#f8bf60" />
        <XPBar width={100 + '%'} color="#f8bf60" />
        <XPBar width={100 + '%'} color="#f8bf60" />
        <XPBar width={100 + '%'} color="#f8bf60" />
        <XPBar width={100 + '%'} color="#f8bf60" />
        <XPBar width={10 + '%'} color="#f8bf60" />
      </div>
      <div
        className="text-[#f8bf60] flex-none flex flex-row justify-center items-center gap-[5px] mr-[10px]
      text-[7px] md:text-[12px] lg:text-[16px] xl:text-[20px]"
      >
        <Icon
          name="star"
          color="#f8bf60"
          className="xl:h-[14px] lg:h-[11.2px] md:h-[8.4px]
          xl:w-[14px] lg:w-[11.2px] md:w-[8.4px]
          w-[7px] h-[7px] "
          raw
        />
        LEVEL {level + 1}
      </div>
    </div>
  );
};

export default LevelBar;
