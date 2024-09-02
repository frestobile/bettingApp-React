import { useState } from 'react';
import Icon from '../../../shared/Icon';
import ScrollableComponent from '../../../shared/ScrollbarComponent';
import TopWinner from '../TopWinner/TopWinner';
import ShadowButton from '../../../shared/ShadowButton';

const ThirdSection = () => {
  const [topWinners] = useState([
    { number: 1, name: 'Username', dValue: 777777.77, xValue: 777777.77 },
    { number: 2, name: 'Username', dValue: 777777.77, xValue: 777777.77 },
    { number: 3, name: 'Username', dValue: 777777.77, xValue: 777777.77 },
    { number: 4, name: 'Username', dValue: 777777.77, xValue: 777777.77 },
    { number: 5, name: 'Username', dValue: 777777.77, xValue: 777777.77 },
    { number: 6, name: 'Username', dValue: 777777.77, xValue: 777777.77 },
    { number: 7, name: 'Username', dValue: 777777.77, xValue: 777777.77 },
    { number: 8, name: 'Username', dValue: 777777.77, xValue: 777777.77 },
    { number: 9, name: 'Username', dValue: 777777.77, xValue: 777777.77 },
    { number: 10, name: 'Username', dValue: 777777.77, xValue: 777777.77 },
    { number: 11, name: 'Username', dValue: 777777.77, xValue: 777777.77 },
    { number: 12, name: 'Username', dValue: 777777.77, xValue: 777777.77 },
    { number: 13, name: 'Username', dValue: 777777.77, xValue: 777777.77 },
    { number: 54, name: 'Username', dValue: 777777.77, xValue: 777777.77 },
    { number: 55, name: 'Username', dValue: 777777.77, xValue: 777777.77 },
    { number: 56, name: 'Username', dValue: 777777.77, xValue: 777777.77 },
    { number: 57, name: 'Username', dValue: 777777.77, xValue: 777777.77 },
    { number: 58, name: 'Username', dValue: 777777.77, xValue: 777777.77 },
    { number: 59, name: 'Username', dValue: 777777.77, xValue: 777777.77 },
    { number: 60, name: 'Username', dValue: 777777.77, xValue: 777777.77 },
    { number: 61, name: 'Username', dValue: 777777.77, xValue: 777777.77 }
  ]);

  return (
    <div className="md:col-span-3 text-white flex flex-col gap-[3px] order-3 md:h-full h-fit">
      <button
        className=" bg-[#2c3137] w-full flex justify-center leading-none items-center text-[13px] h-[44px] md:py-[10px] xl:py-[15px]
        xl:text-[16px] lg:text-[12.8px] md:text-[9.6px] text-[8px]"
      >
        TOP WINNERS (24 HR)
        <Icon
          name="sortArrowDown"
          color="white"
          className="ml-[3px] mt-[2px] xl:h-[11px] lg:h-[8.8px] md:h-[6.6px]0"
          raw
        />
      </button>
      <ScrollableComponent height="calc(100vh - 291px)">
        <div className="!bg-[#2C3137] flex flex-col gap-[3px] px-[4px] py-[5px]">
          {topWinners.map((t, i) => (
            <TopWinner
              key={i}
              number={t.number}
              name={t.name}
              dValue={t.dValue}
              xValue={t.xValue}
            />
          ))}
        </div>
      </ScrollableComponent>
      <div
        className="xl:text-[14px] lg:text-[11.2px] md:text-[8.4px] text-[8px] gap-[5px]
      bg-[#2c3137] flex flex-col justify-center items-center relative h-[100px] px-[10px]"
      >
        <>MODE</>
        <span className="flex w-full">
          <ShadowButton className="hover:mix-blend-difference text-[black] flex justify-center items-center shadow-[0px_6px_0px_0px_rgba(153,122,73,1)] w-[50%] bg-[#f8bf60] h-[33px] rounded-l-[5px]">
            GROUP
          </ShadowButton>
          <ShadowButton
            className="whitespace-nowrap
            hover:bg-[#21262c] hover:shadow-[0px_6px_0px_0px_rgba(29,32,34,1)]
            flex justify-center items-center
            shadow-[0px_6px_0px_0px_rgba(33,38,44,1)] w-[50%] bg-[#1c2127] h-[33px] rounded-r-[5px]"
          >
            SOLO
          </ShadowButton>
        </span>
        <button
          className="xl:text-[16px] md:text-[12.8px] md:text-[9.6px] text-[8px]
        flex flex-col justify-center items-center absolute top-[-13%]"
        >
          <Icon name="iosArrowDown" color="white" raw />
        </button>
      </div>
    </div>
  );
};

export default ThirdSection;
