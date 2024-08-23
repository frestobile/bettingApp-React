import { FC } from 'react';
import Icon from './Icon';

interface IDiamond {
  postion: 'start' | 'end' | 'center';
  xValue: number;
  dValue: number;
  containerClassName?: string;
  className?: string;
}

const DiamondComponent: FC<IDiamond> = ({
  postion,
  xValue,
  dValue,
  containerClassName,
  className
}) => {
  if (postion === 'end') {
    return (
      <div
        className={`bg-[#171c22] flex justify-center flex-col ml-0
        text-[6px] md:text-[7.2px] lg:text-[9.6px] xl:text-[12px]
        pr-[2px] ${containerClassName || ''}`}
      >
        <div
          className={`flex flex-row  gap-[2px] leading-0 justify-end items-center ${
            className || ''
          }`}
        >
          <span className="truncate">
            {xValue < 1000000
              ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
                  .format(xValue)
                  .replace('$', '')
              : xValue / 1000000 + 'M'}
          </span>

          <Icon name="XMarkIcon" color="#f8bf60" raw />
        </div>
        <div className={`gap-[2px] flex flex-row justify-end items-center ${className || ''}`}>
          <span className="truncate">
            {dValue < 1000000
              ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
                  .format(dValue)
                  .replace('$', '')
              : dValue / 1000000 + 'M'}
          </span>
          <Icon name="diamondIcon" color="#f8bf60" raw />
        </div>
      </div>
    );
  } else if (postion === 'center') {
    return (
      <div
        className={`bg-[#171c22] flex justify-center gap-[2px] flex-col ml-0
        text-[6px] md:text-[7.2px] lg:text-[9.6px] xl:text-[12px] pr-[2px] ${
          containerClassName || ''
        }`}
      >
        <div className={`flex justify-center leading-0 text-right items-center ${className || ''}`}>
          <span className="text-[#f8bf60]">x</span>
          <span className="truncate">
            {xValue < 1000000
              ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
                  .format(xValue)
                  .replace('$', '')
              : xValue / 1000000 + 'M'}
          </span>
        </div>
        <div className={`flex items-center justify-center ${className || ''}`}>
          <span className="text-[#f8bf60]">$</span>
          <span className="truncate">
            {dValue < 1000000
              ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
                  .format(dValue)
                  .replace('$', '')
              : dValue / 1000000 + 'M'}
          </span>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default DiamondComponent;
