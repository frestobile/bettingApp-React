import { useState } from 'react';
import AutoPlaySettingItem from '../AutoPlaySettingItem';
import AutoPlaySettingSwitch from '../AutoPlaySettingSwitch';
import AutoPlaySettingBetPercent from '../AutoPlaySettingBetPercent';
import DropDownButtonRevert from '../DropDownButtonRevert';

const AutoPlayBar = ({ className }) => {
  const [roundAmount, setRoundAmount] = useState(0);
  const [lossLimit, setLossLimit] = useState(1000);
  const [profitLimit, setProfitLimit] = useState(1000);
  const [betOnWin, setBetOnWin] = useState(75);
  const [betOnLoss, setBetonLoss] = useState(100);
  const rounds = [10, 25, 50, 75, 100, 500, 0, null];
  const profitLimits = [0, 5, 20, 50, 100, null];
  const lossLimits = profitLimits;
  const [isVisible, setIsVisible] = useState(false);
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      className={`z-[3] md:w-[200px] bg-[#F8BF60] text-black flex flex-col w-[90%] md:left-0 left-[5%]
            md:text-[7.2px] lg:text-[9.6px] xl:text-[12px] gap-y-[10px] text-[10px]
            ${className || ''}`}
    >
      <div className="flex flex-row justify-between items-center">
        <span className="flex flex-col">
          <span className="lg:text-[12.8px] md:text-[8.4px] xl:text-[14px]">AUTOPLAY</span>
        </span>
        <DropDownButtonRevert isVisible={isVisible} setIsVisible={setIsVisible}>
          ADVANCED
        </DropDownButtonRevert>
      </div>
      <AutoPlaySettingItem
        girdCols="grid-cols-4"
        title="NUMBER OF ROUNDS"
        lists={rounds}
        selectedAmount={roundAmount}
        setSelectedAmount={setRoundAmount}
      />
      {isVisible ? (
        <>
          <AutoPlaySettingItem
            girdCols="grid-cols-3"
            title="TOTAL LOSS LIMIT"
            lists={lossLimits}
            selectedAmount={lossLimit}
            setSelectedAmount={setLossLimit}
            isLimit
          />
          <AutoPlaySettingItem
            girdCols="grid-cols-3"
            title="TOTAL PROFIT LIMIT"
            lists={profitLimits}
            selectedAmount={profitLimit}
            setSelectedAmount={setProfitLimit}
            isLimit
          />
          <AutoPlaySettingSwitch isOn={isOn} title="STOP WHEN BONUS WON" setIsOn={setIsOn} />
          <AutoPlaySettingBetPercent
            barColor="#fcdfb0"
            percent={betOnWin}
            setPercent={setBetOnWin}
            title="ADJUST BET ON WIN"
          />
          <AutoPlaySettingBetPercent
            revert
            percent={betOnLoss}
            setPercent={setBetonLoss}
            title="ADJUST BET ON LOSS"
          />
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default AutoPlayBar;
