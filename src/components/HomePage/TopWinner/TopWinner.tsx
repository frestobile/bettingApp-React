import { FC } from 'react';

interface ITopWinner {
  number: number;
  name: string;
  dValue: number;
  xValue: number;
  className?: string;
  containerClassName?: string;
}

const TopWinner: FC<ITopWinner> = ({
  number,
  name,
  dValue,
  xValue,
  className,
  containerClassName
}) => {
  return (
    <div
      className={`flex bg-[#171C22] py-[4px] text-[6px] md:text-[7.2px] lg:text-[9.6px] xl:text-[12px]
      justify-between
      px-[5px]
      xl:py-[7px] text-[#F8BF60] flex-row items-center text-center ${containerClassName || ''}`}
    >
      <div className="flex flex-row gap-[5px]">
        <div className={`xl:px-[5px] lg:px-[4px] md:px-[3px]  ${className || ''}`}>{number}</div>
        <div className={`flex items-center text-left ${className || ''}`}>{name}</div>
      </div>
      <div
        className={`xl:gap-[5px] md:gap-[3px]
        flex items-center leading-none flex-col text-center ${className || ''}`}
      >
        <div className="w-full truncate">
          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(dValue)}
        </div>
        <div className="w-full truncate">
          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
            .format(xValue)
            .replace('$', 'x')}
        </div>
      </div>
    </div>
  );
};

export default TopWinner;
