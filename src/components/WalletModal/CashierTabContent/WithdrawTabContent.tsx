import Button from '../../../shared/Button';
import Icon from '../../../shared/Icon';
import BetStatusBar from '../../HomePage/SecondSection/BetStatusBar';
import WalletSelection from './WalletSelection';

const WithdrawTabContent = ({ address }) => {
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
        "
        >
          BTC Address
        </label>
        <input
          type="text"
          name="address"
          className="border border-none outline-none
                    bg-[#1c2127] text-center
                    flex-auto
                    px-[12px] h-[48px]
                    "
          value={address}
        />
        <Icon name="bitcoin" raw color="#f8bf60" size={14} className="absolute right-[15px] " />
      </div>
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
          Amount
        </label>
        <input
          id="amount"
          type="text"
          name="address"
          className="border border-none outline-none
                    bg-[#1c2127] text-center
                    rounded-[5px]
                    w-full
                    px-[12px] h-[48px]
                    "
          value="17,000.00"
        />
        <Icon name="bitcoin" raw color="#f8bf60" size={14} className="absolute right-[15px] " />
      </div>
      <BetStatusBar
        containerClasses="w-full"
        thickBarClass="!h-[13px]"
        thinBarClass=""
        biggestBarClass="!h-[20px] !w-[50px]"
      />
      <Button
        className="bg-[#1c2127]
      w-full h-[48px] border
      rounded-[5px]
      !border-[#f8bf60]"
      >
        WITHDRAW
      </Button>
      <span className="text-[#96989b] text-center">
        Minimum withdrawal is 0.00050000. Your withdrawal will have 0.00007000
        <br />
        subtracted from your remaining balance to cover the fee required to <br />
        process the transaction.
      </span>
    </div>
  );
};

export default WithdrawTabContent;
