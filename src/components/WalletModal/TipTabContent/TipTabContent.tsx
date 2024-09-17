import { useState } from 'react';
import Button from '../../../shared/Button';
import Icon from '../../../shared/Icon';
import BetStatusBar from '../../HomePage/SecondSection/BetStatusBar';
import WalletSelection from '../CashierTabContent/WalletSelection';
import CheckBox from './Checkbox';

const TipTabContent = () => {
  const [isPrivate, setIsPrivate] = useState(false);
  return (
    <div
      className="flex flex-col gap-[10px]
    mx-[15px]
    items-center justify-center"
    >
      <WalletSelection type="diamondIcon" />
      <div
        className="flex flex-row w-full
      items-center bg-[#1c2127] rounded-[4px]
      relative"
      >
        <label
          className="px-[10px]
        absolute"
          htmlFor="Username"
        >
          Username
        </label>
        <input
          id="Username"
          type="text"
          name="Username"
          className="border border-none outline-none
                    bg-[#1c2127] text-center
                    w-full rounded-[5px]
                    px-[12px] h-[48px]
                    "
          value="loremipsum93"
        />
      </div>
      <div
        className="flex flex-row w-full
      items-center bg-[#1c2127] rounded-[4px]
      relative"
      >
        <label
          className="px-[10px]
        absolute"
          htmlFor="Amount"
        >
          Amount
        </label>
        <input
          id="Amount"
          type="text"
          name="Amount"
          className="border border-none outline-none
                    bg-[#1c2127] text-center
                    w-full rounded-[5px]
                    px-[12px] h-[48px]
                    "
          value="20,000.00"
        />
        <Icon name="diamondIcon" className="absolute right-[10px]" raw color="#f8bf60" size={14} />
      </div>
      <BetStatusBar
        containerClasses="w-full"
        thickBarClass="md:!h-[13px] !h-[10px]"
        thinBarClass=""
        biggestBarClass="md:!h-[20px] !h-[15px] md:!w-[50px] !w-[30px]"
      />
      <div className="flex flex-row gap-[5px] w-full items-center">
        <button
          onClick={() => {
            setIsPrivate(true);
          }}
          className={`${isPrivate ? 'text-white' : 'text-[#96989b]'}`}
        >
          Private
        </button>
        <CheckBox
          className="md:scale-[1] scale-[0.6]"
          isLeft={isPrivate}
          setIsLeft={setIsPrivate}
        />
        <button
          onClick={() => {
            setIsPrivate(false);
          }}
          className={`${isPrivate ? 'text-[#96989b]' : 'text-white'}`}
        >
          Public
        </button>
      </div>

      <p className="w-full">This tip will be broadcasted in the global chat.</p>
      <Button
        className="bg-[#f8bf60] text-black
      w-full h-[48px] border
      rounded-[5px]
      lg:text-[12.8px] md:text-[8.4px] xl:text-[14px]
      !border-[#f8bf60]"
      >
        SEND TIP
      </Button>
    </div>
  );
};

export default TipTabContent;
