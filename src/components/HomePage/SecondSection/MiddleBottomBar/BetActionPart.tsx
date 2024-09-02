import Icon from '../../../../shared/Icon';
import ShadowButton from '../../../../shared/ShadowButton';
import BetSlideBar from './BetSlideBar';

const BetActionPart = () => {
  return (
    <div className="bg-[#2c3137] md:col-span-3 order-1 flex flex-col gap-[5px] px-[3px] py-[10px]">
      <ShadowButton
        className="whitespace-nowrap text-[#f8bf60] leading-none
      hover:bg-[#21262c] hover:shadow-[0px_4px_0px_0px_rgba(29,32,34,1)] shadow-[0px_4px_0px_0px_rgba(33,38,44,1)]
      flex justify-center items-center
      xl:text-[8px] lg:text-[6.4px] md:text-[4.8px] text-[10px] leading-none
      md:py-[3px] py-[5px]
      w-[100%] bg-[#1c2127] md:h-[14px] rounded-[5px]"
      >
        <Icon name="diamondIcon" color="#f8bf60" raw />
        &nbsp;
        {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
          .format(5)
          .replace('$', '')}{' '}
        PROFIT ON WIN
      </ShadowButton>
      <div className="flex flex-row text-white h-[34px] gap-[1px] mt-[4px]">
        <div
          className="bg-[#1c2127] flex-auto flex lg:flex-row md:flex-col flex-row items-center justify-between
        rounded-l-[5px] relative gap-[1px] px-[2px]
        text-[9px] xl:text-[9px] lg:text-[7.2px] md:text-[5.4px] "
        >
          <button
            className="flex flex-row items-center gap-[2px] 
          text-[10px] xl:text-[10px] lg:text-[8px] md:text-[6px] 
          flex-none w-fit"
          >
            Bet
            <Icon name="sortArrowDown" color="white" size={6} raw />
          </button>
          <span className="md:max-w-[25px] lg:max-w-[20px] xl:max-w-[50px] truncate text-center px-[2px]">
            10
          </span>
          <Icon name="diamondIcon" className="flex-none w-fit" color="#f8bf60" raw />
        </div>
        <div
          className="bg-[#1c2127] flex-none
        text-[9px] xl:text-[9px] lg:text-[7.2px] md:text-[5.4px] 
        xl:w-[35px] lg:w-[28px] md:w-[21px] w-[35px]
        flex items-center justify-center"
        >
          1/2
        </div>
        <div
          className="bg-[#1c2127] flex-none
          text-[9px] xl:text-[9px] lg:text-[7.2px] md:text-[5.4px] 
          xl:w-[35px] lg:w-[28px] md:w-[21px] w-[35px]
          flex items-center justify-center rounded-r-[5px]"
        >
          x2
        </div>
      </div>
      <BetSlideBar />
    </div>
  );
};

export default BetActionPart;
