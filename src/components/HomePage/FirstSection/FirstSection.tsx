import Icon from '../../../shared/Icon';
import ScrollableComponent from '../../../shared/ScrollbarComponent';
import ShadowButton from '../../../shared/ShadowButton';
import AllBets from './AllBets';
import TextAndBet from './Text_And_Bet';
import YourBets from './YourBets';

const FirstSection = () => {
  return (
    <div className="md:col-span-3 text-white flex flex-col gap-[3px] md:order-1 order-2 ">
      <div
        className=" bg-[#2c3137] w-full flex justify-center items-center
      h-[44px] 
      xl:text-[16px] lg:text-[12.8px] md:text-[9.6px] text-[8px]"
      >
        BETS
      </div>
      <ScrollableComponent height="calc(100vh - 291px)">
        <div className="flex flex-col">
          <TextAndBet
            text={`My Bets ${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
              .format(777777)
              .replace('$', '')
              .replace(/\..*/g, '')}`}
            bet={500000}
          />
          <YourBets />
          <TextAndBet
            text={`${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
              .format(777777)
              .replace('$', '')
              .replace(/\..*/g, '')} Bets`}
            bet={1250000}
          />
          <AllBets />
        </div>
      </ScrollableComponent>

      <div
        className="xl:text-[14px] lg:text-[11.2px] md:text-[8.4px] text-[8px]
      bg-[#2c3137] flex flex-col justify-center items-center
      gap-[5px]
      xl:px-[10px] lg:px-[8px] md:px-[6px] px-[5px]
      relative h-[100px]"
      >
        <div>TYPE</div>
        <div className="flex w-full">
          <ShadowButton
            className="hover:mix-blend-difference text-[black] flex justify-center items-center
          shadow-[0px_5px_0px_0px_rgba(153,122,73,1)] w-[50%] bg-[#f8bf60] h-[33px] rounded-l-[5px]"
          >
            NORMAL
          </ShadowButton>
          <ShadowButton
            className="whitespace-break-spaces hover:bg-[#21262c]
          hover:shadow-[0px_5px_0px_0px_rgba(29,32,34,1)] shadow-[0px_5px_0px_0px_rgba(33,38,44,1)]
          flex justify-center items-center !leading-none
          w-[50%] bg-[#1c2127] h-[33px] rounded-r-[5px]"
          >
            BONUS-ONLY
          </ShadowButton>
        </div>
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

export default FirstSection;
