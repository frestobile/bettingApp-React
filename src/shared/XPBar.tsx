import { FC } from 'react';

interface IXPBar {
  width?: string | number;
  color?: string;
  containterClass?: string;
  className?: string;
  shadowClass?: string;
}

const XPBar: FC<IXPBar> = ({
  width = '100%',
  color = '#1c2127',
  containterClass,
  className,
  shadowClass
}) => {
  return (
    <div
      className={`relative ${containterClass || ''} flex-auto md:h-[50%] h-[65%] skew-x-[-35deg]`}
    >
      <div
        className={`${className || ''} w-full border flex justify-start h-full overflow-hidden`}
        style={{ borderColor: color }}
      >
        <div style={{ width: width, backgroundColor: color }} className="h-full" />
      </div>
      <div
        className={`${className || ''} ${
          shadowClass || ''
        } opacity-[0.4] border !border-t-[0] absolute md:top-[4px] top-[2.3px] w-full flex justify-start h-full overflow-hidden`}
        style={{ borderColor: color }}
      >
        <div style={{ width: width, backgroundColor: color }} className="h-full" />
      </div>
    </div>
  );
};

export default XPBar;
