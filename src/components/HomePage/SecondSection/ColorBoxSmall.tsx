import { FC } from 'react';

interface IColorBox {
  isBonus: boolean;
  text: string;
  color: string;
  containterClass?: string;
  className?: string;
}

const ColorBoxSmall: FC<IColorBox> = ({ isBonus, color, containterClass, className, text }) => {
  return (
    <div
      className={`relative ${containterClass || ''} rounded-[3px] col-span-1 flex h-full ${
        isBonus
          ? 'flex-col leading-none justify-center items-center !gap-0'
          : 'flex-row justify-center items-center'
      }`}
      style={{ backgroundColor: color }}
    >
      {isBonus && (
        <div className="justify-center flex text-[5px] md:text-[6px] lg:text-[8px] xl:text-[10px]">
          BONUS
        </div>
      )}
      <span
        className={`truncate leading-none text-center break-all  w-full
        xl:text-[16px] lg:text-[12.8px] md:text-[9.6px] text-[8px]
        ${className || ''}`}
      >
        {text}
      </span>
    </div>
  );
};

export default ColorBoxSmall;
