import XPBar from '../../../../shared/XPBar';

const StakeStatusBar = ({
  containerClasses = '',
  biggestBarClass = '',
  thickBarClass = '',
  thinBarClass = ''
}) => {
  return (
    <div className={`flex flex-row items-center gap-[3px] ${containerClasses || ''}`}>
      <XPBar
        color="#f8bf60"
        className="rounded-0"
        containterClass={`!skew-x-0 !flex-none !h-[10px] md:!w-[30px] !w-[15px] ${
          thickBarClass || ''
        }`}
        shadowClass="hidden"
      />
      <XPBar
        color="#f8bf60"
        className="rounded-0"
        containterClass={`!skew-x-0 !h-[5px] ${thinBarClass || ''}`}
        shadowClass="hidden"
      />
      <XPBar
        color="#f8bf60"
        className="rounded-0"
        shadowClass="hidden"
        containterClass={`!skew-x-0 !flex-none !h-[10px] md:!w-[30px] !w-[15px] ${
          thickBarClass || ''
        }`}
      />
      <div className="flex flex-row items-center flex-none">
        <XPBar
          color="#f8bf60"
          className="rounded-0"
          containterClass="!skew-x-0 md:!w-[73px] !w-[23px] !flex-none !h-[5px]"
          shadowClass="hidden"
        />
        <XPBar
          color="#f8bf60"
          className="rounded-0"
          containterClass={`!skew-x-0 !flex-none !h-[10px] md:!w-[30px] !w-[12px] ${
            thickBarClass || ''
          }`}
          shadowClass="hidden"
        />
        <XPBar
          color="#f8bf60"
          className="rounded-0"
          containterClass="!skew-x-0 md:!w-[32px] !w-[13px] !flex-none !h-[5px]"
          shadowClass="hidden"
        />
      </div>
      <XPBar
        color="#f8bf60"
        className="rounded-[2px]"
        shadowClass="hidden"
        containterClass={`!skew-x-0 md:w-[40px] w-[30px] !flex-none !h-[15px] ${
          biggestBarClass || ''
        }`}
      />
      <XPBar
        className="rounded-0"
        containterClass="!skew-x-0 md:!w-[32px] !w-[13px] !flex-none !h-[5px]"
        shadowClass="hidden"
      />
      <XPBar
        shadowClass="hidden"
        className="rounded-0"
        containterClass={`!skew-x-0 !flex-none !h-[10px] md:!w-[20px] !w-[14px] ${
          thickBarClass || ''
        }`}
      />
      <XPBar
        className="rounded-0"
        containterClass={`!skew-x-0 !h-[5px] ${thinBarClass || ''}`}
        shadowClass="hidden"
      />
      <XPBar
        className="rounded-0"
        containterClass={`!skew-x-0 !flex-none !h-[10px] md:!w-[30px] !w-[15px] ${
          thickBarClass || ''
        }`}
        shadowClass="hidden"
      />
    </div>
  );
};

export default StakeStatusBar;
