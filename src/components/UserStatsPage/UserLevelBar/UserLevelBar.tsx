import Icon from '../../../shared/Icon';
import XPBar from '../../../shared/XPBar';

const UserLevelBar = ({ level, className = '' }) => {
  return (
    <div className={`flex flex-row gap-[10px] ${className || ''}`}>
      <div className="text-[#f8bf60] flex-none flex flex-row justify-center items-center gap-[5px] ml-[10px] xl:text-[20px] lg:text-[16px] md:text-[12px]">
        {level} <Icon name="star" color="#f8bf60" size={14} raw />
      </div>
      <div className="flex flex-row flex-auto items-center gap-[6px]">
        <XPBar shadowClass="hidden" width={100 + '%'} color="#f8bf60" />
        <XPBar shadowClass="hidden" width={100 + '%'} color="#f8bf60" />
        <XPBar shadowClass="hidden" width={100 + '%'} color="#f8bf60" />
        <XPBar shadowClass="hidden" width={100 + '%'} color="#f8bf60" />
        <XPBar shadowClass="hidden" width={100 + '%'} color="#f8bf60" />
        <XPBar shadowClass="hidden" width={100 + '%'} color="#f8bf60" />
        <XPBar shadowClass="hidden" width={100 + '%'} color="#f8bf60" />
        <XPBar shadowClass="hidden" width={100 + '%'} color="#f8bf60" />
        <XPBar shadowClass="hidden" width={100 + '%'} color="#f8bf60" />
        <XPBar shadowClass="hidden" width={0 + '%'} color="#f8bf60" />
      </div>
      <div className="text-[#f8bf60] flex-none flex flex-row justify-center items-center gap-[5px] mr-[10px] xl:text-[20px] lg:text-[16px] md:text-[12px]">
        <Icon name="star" color="#f8bf60" size={14} raw /> {level + 1}
      </div>
    </div>
  );
};

export default UserLevelBar;
