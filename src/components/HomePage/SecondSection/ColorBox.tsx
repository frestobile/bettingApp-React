import { FC } from 'react';

interface IColorBox {
  isBonus: boolean;
  width?: string;
  text: string;
  color: string;
  containterClass?: string;
  className?: string;
  animation?: string;
}

const ColorBox: FC<IColorBox> = ({
  isBonus,
  width,
  color,
  containterClass,
  className,
  text,
  animation = ''
}) => {
  return (
    <div
      className={`relative ${containterClass || ''} rounded-[3px] mr-[2px] 
      flex h-full ${
        isBonus
          ? 'flex-col leading-none justify-center items-center !gap-0'
          : 'flex-row justify-center items-center'
      }`}
      style={{ backgroundColor: color, animation: animation }}
    >
      {isBonus && (
        <div className="justify-center flex text-[7px] md:text-[7.2px] lg:text-[9.6px] xl:text-[12px]">
          BONUS
        </div>
      )}
      <span
        className={`leading-none text-center text-[10px] xl:text-[14px] lg:text-[11.2px] md:text-[8.4px] ${
          className || ''
        }`}
      >
        {text}
      </span>
      {isBonus && (
        <div
          className="opacity-[0.3] absolute flex w-[5px] justify-start h-full overflow-hidden"
          style={{ backgroundColor: 'black', left: width || '0' }}
        />
      )}
    </div>
  );
};

export default ColorBox;
