import Button from '../../../shared/Button';
import Icon from '../../../shared/Icon';
import BetStatusBar from '../../HomePage/SecondSection/BetStatusBar';
import CoinSelection from '../CashierTabContent/CoinSelection';
import Resultitem from './Resultitem';
import SwapSelection from './SwapSelection';

const SwapTabContent = () => {
  return (
    <div
      className="flex flex-col gap-[10px]
    items-center justify-center"
    >
      <SwapSelection />
      <div
        className="flex flex-row w-full
      items-center bg-[#1c2127] rounded-[4px]
      relative"
      >
        <label
          className="px-[10px]
        absolute"
          htmlFor="amount"
        >
          BTC Amount
        </label>
        <input
          id="amount"
          type="text"
          name="address"
          className="border border-none outline-none
                    bg-[#1c2127] text-center
                    w-full rounded-[5px]
                    px-[12px] h-[48px]
                    "
          value="1,000.00"
        />
        <div className="absolute right-[15px] justify-center flex items-center">
          <Icon name="bitcoin" raw color="#f8bf60" size={14} />
          <CoinSelection classNames="!bg-transparent" />
        </div>
      </div>
      <BetStatusBar
        containerClasses="w-full"
        thickBarClass="!h-[13px]"
        thinBarClass=""
        biggestBarClass="!h-[20px] !w-[50px]"
      />
      <Icon name="updown" size={16} className="bg-[#1c2127] !h-[40px] px-[25px] rounded-[25px]" />
      <div
        className="flex flex-row w-full
      items-center bg-[#1c2127] rounded-[4px]
      relative"
      >
        <label
          className="px-[10px]
        absolute"
          htmlFor="gemAmount"
        >
          GEMS
        </label>
        <input
          id="gemAmount"
          type="text"
          name="gemAmount"
          className="border border-none outline-none
                    bg-[#1c2127] text-center
                    w-full rounded-[5px]
                    px-[12px] h-[48px]
                    "
          value="170.00"
        />
        <Icon name="diamondIcon" raw color="#f8bf60" size={14} className="absolute right-[15px]" />
      </div>

      <Resultitem
        text={
          <div className="flex gap-[3px] items-center">
            <Icon name="diamondIcon" raw size={12} color="#f8bf60" /> 1 =
            <Icon name="bitcoin" size={12} color="#f8bf60" /> 147.05 (
            <span className="text-[#f8bf60]">$</span>4,443,851,16)
          </div>
        }
        value={
          <span className="flex items-center gap-[3px]">
            Price Impact<span className="text-[#ba4024]">-26.52%</span>
          </span>
        }
        unit={<></>}
      />
      <Button
        className="bg-[#f8bf60] text-black
      w-full h-[48px] border
      rounded-[5px]
      lg:text-[12.8px] md:text-[8.4px] xl:text-[14px]
      !border-[#f8bf60]"
      >
        SWAP
      </Button>
    </div>
  );
};

export default SwapTabContent;
