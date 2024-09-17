import { FC } from 'react';
import Icon from '../../../shared/Icon';

interface IUserAndMark {
  type: 'blue' | 'purple' | 'yellow' | 'green' | string;
  mark: number;
  name: string;
  className?: string;
  containerClassName?: string;
  dValue: number;
  xValue: number;
}

const UserAndMark: FC<IUserAndMark> = ({
  type = 'yellow',
  name,
  mark,
  dValue,
  xValue,
  className,
  containerClassName = ''
}) => {
  return (
    <div
      className={`bg-[#171c22] p-[3px] leading-none
      text-[6px] md:text-[7.2px] lg:text-[9.6px] xl:text-[12px] flex 
      ${containerClassName || ''}`}
    >
      <div className="flex flex-wrap w-[68%] items-center text-black gap-[3px]">
        <div
          className={`flex flex-row gap-[2px] p-[3px] rounded-[4px] leading-0 justify-start items-center ${
            className || ''
          }`}
          style={{
            backgroundColor:
              type === 'blue'
                ? '#2cabd9'
                : type === 'yellow'
                  ? '#f8bf60'
                  : type === 'green'
                    ? '#298854'
                    : '#af60f8'
          }}
        >
          <Icon name="star" color="black" raw />
          {mark}
        </div>
        <div
          className="truncate leading-0 my-auto py-[3px]"
          style={{
            color:
              type === 'blue'
                ? '#2cabd9'
                : type === 'yellow'
                  ? '#f8bf60'
                  : type === 'green'
                    ? '#298854'
                    : '#af60f8'
          }}
        >
          {name}
        </div>
      </div>
      <div className="flex flex-col w-[32%] text-right gap-[3px]">
        <div className="py-[3px]">
          <span className="text-[#f8bf60]">$</span>
          {dValue < 1000000
            ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
                .format(dValue)
                .replace('$', '')
            : dValue / 1000000 + 'M'}
        </div>
        <div className="py-[3px]">
          <span className="text-[#f8bf60]">x</span>
          {xValue < 1000000
            ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
                .format(xValue)
                .replace('$', '')
            : xValue / 1000000 + 'M'}
        </div>
      </div>
    </div>
  );
};

export default UserAndMark;
