import Button from '../../../shared/Button';
import Icon from '../../../shared/Icon';
import BetStatusBar from '../../HomePage/SecondSection/BetStatusBar';
import WalletSelection from '../CashierTabContent/WalletSelection';
import Results from './Results';

const BondTabContent = () => {
  return (
    <div
      className="flex flex-col gap-[10px]
    items-center justify-center"
    >
      <WalletSelection type="bitcoin" />
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
        <Icon name="bitcoin" raw color="#f8bf60" size={14} className="absolute right-[15px] " />
      </div>
      <BetStatusBar
        containerClasses="w-full"
        thickBarClass="!h-[13px]"
        thinBarClass=""
        biggestBarClass="!h-[20px] !w-[50px]"
      />
      <Results />
      <Button
        className="bg-[#f8bf60] text-black
      w-full h-[48px] border
      rounded-[5px]
      lg:text-[12.8px] md:text-[8.4px] xl:text-[14px]
      !border-[#f8bf60]"
      >
        BOND (+5.65%)
      </Button>
    </div>
  );
};

export default BondTabContent;
