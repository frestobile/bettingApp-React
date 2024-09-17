import XPBar from '../../../../shared/XPBar';

const BetStatusBar = ({
  containerClasses = '',
  biggestBarClass = '',
  thickBarClass = '',
  thinBarClass = '',
  shadowClass = ''
}) => {
  return (
    <div
      className={`lg:scale-y-[0.8] md:scale-y-[0.6]
    flex flex-row items-center gap-[3px] ${containerClasses || ''}`}
    >
      <XPBar
        color="#f8bf60"
        className="rounded-0"
        containterClass={`!skew-x-0 !flex-none xl:!h-[10px] xl:!w-[30px]
        lg:!h-[8px] lg:!w-[24px] md:!h-[6px] md:!w-[18px] !h-[10px] !w-[18px]
        ${thickBarClass || ''}`}
        shadowClass={shadowClass || 'hidden'}
      />
      <XPBar
        color="#f8bf60"
        className="rounded-0"
        containterClass={`!skew-x-0 !h-[5px] ${thinBarClass || ''}`}
        shadowClass={shadowClass || 'hidden'}
      />
      <XPBar
        color="#f8bf60"
        className="rounded-0"
        shadowClass={shadowClass || 'hidden'}
        containterClass={`!skew-x-0 !flex-none xl:!h-[10px] xl:!w-[30px]
        lg:!h-[8px] lg:!w-[24px] md:!h-[6px] md:!w-[18px] !h-[10px] !w-[18px] ${
          thickBarClass || ''
        }`}
      />
      <div className="flex flex-row items-center flex-none">
        <XPBar
          color="#f8bf60"
          className="rounded-0"
          containterClass="!skew-x-0 !w-[13px] !flex-none !h-[5px]"
          shadowClass={shadowClass || 'hidden'}
        />
        <XPBar
          color="#f8bf60"
          className="rounded-[2px]"
          shadowClass={shadowClass || 'hidden'}
          containterClass={`!skew-x-0 xl:w-[40px] lg:w-[32px] md:w-[24px] w-[30px]
          !flex-none xl:!h-[15px] lg:!h-[12px] md:!h-[9px] !h-[13px]  ${biggestBarClass || ''}`}
        />
        <XPBar
          className="rounded-0"
          containterClass="!skew-x-0 !w-[32px] !flex-none !h-[5px]"
          shadowClass={shadowClass || 'hidden'}
        />
      </div>
      <XPBar
        shadowClass={shadowClass || 'hidden'}
        className="rounded-0"
        containterClass={`!skew-x-0 !flex-none xl:!h-[10px] xl:!w-[30px]
        lg:!h-[8px] lg:!w-[24px] md:!h-[6px] md:!w-[18px] !h-[10px] !w-[18px] ${
          thickBarClass || ''
        }`}
      />
      <XPBar
        shadowClass={shadowClass || 'hidden'}
        className="rounded-0"
        containterClass={`!skew-x-0 !h-[5px] ${thinBarClass || ''}`}
      />
      <XPBar
        className="rounded-0"
        containterClass={`!skew-x-0 !flex-none xl:!h-[10px] xl:!w-[30px]
        lg:!h-[8px] lg:!w-[24px] md:!h-[6px] md:!w-[18px] !h-[10px] !w-[18px] ${
          thickBarClass || ''
        }`}
        shadowClass={shadowClass || 'hidden'}
      />
      <XPBar
        className="rounded-0"
        containterClass={`!skew-x-0 !h-[5px] ${thinBarClass || ''}`}
        shadowClass={shadowClass || 'hidden'}
      />
      <XPBar
        className="rounded-0"
        containterClass={`!skew-x-0 !flex-none xl:!h-[10px] xl:!w-[30px]
        lg:!h-[8px] lg:!w-[24px] md:!h-[6px] md:!w-[18px] !h-[10px] !w-[18px] ${
          thickBarClass || ''
        }`}
        shadowClass={shadowClass || 'hidden'}
      />
    </div>
  );
};

export default BetStatusBar;
