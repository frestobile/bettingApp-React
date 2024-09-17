import { useEffect, useState } from 'react';
import DividerDiv from '../../DividerDiv';
import BetStatusBar from '../../HomePage/SecondSection/BetStatusBar';
import NumberProcess from '../../NumberProcess';
import InfoButton from '../../WalletModal/YieldTabContent/StakeSubTabContent/InfoButton';
import RiskStake from '../../WalletModal/YieldTabContent/StakeSubTabContent/RiskStake';
import StakeInfoButtons from '../../WalletModal/YieldTabContent/StakeSubTabContent/StakeInfoButtons';
import StakeStatusBar from '../../WalletModal/YieldTabContent/StakeSubTabContent/StakeStatusBar';
import CustomStakesTable from '../CustomStakesTable';
import StackSelection from './StakeSelection';
import ResetWinChanceModal from '../../ResetWinChanceModal';
import AddOrEditingButtons from '../AddOrEditingButtons';

const CustomStakesTabContent = () => {
  const headers = ['POOL', 'STAKE', 'REWARD', 'CHANCE', 'MULTIPLIER', 'MODIFY'];
  const list = [
    ['WAGER', 10, 20000, 0.1, 700, 0],
    ['STAKE', 20, 10000, 0.2, 200, 0],
    ['STAKE', 30, 20000, 0.3, 100, 0],
    ['STAKE', 40, 70000, 0.2, 800, 0],
    ['AFFILIATE', 10, 20000, 0.6, 900, 0],
    ['WAGER', 10, 20000, 0.1, 700, 0],
    ['STAKE', 20, 10000, 0.2, 200, 0],
    ['STAKE', 30, 20000, 0.3, 100, 0],
    ['STAKE', 40, 70000, 0.2, 800, 0],
    ['AFFILIATE', 10, 20000, 0.6, 900, 0],
    ['WAGER', 10, 20000, 0.1, 700, 0],
    ['STAKE', 20, 10000, 0.2, 200, 0],
    ['STAKE', 30, 20000, 0.3, 100, 0],
    ['STAKE', 40, 70000, 0.2, 800, 0],
    ['AFFILIATE', 10, 20000, 0.6, 900, 0],
    ['WAGER', 10, 20000, 0.1, 700, 0],
    ['STAKE', 20, 10000, 0.2, 200, 0],
    ['STAKE', 30, 20000, 0.3, 100, 0],
    ['STAKE', 40, 70000, 0.2, 800, 0],
    ['AFFILIATE', 10, 20000, 0.6, 900, 0]
  ];
  const [isVisibleResetWinChance, setIsVisibleResetWinChance] = useState(false);
  const [currentIndex, setCurrenIndex] = useState<{ type: null | string; id: null | number }>({
    type: null,
    id: null
  });
  useEffect(() => {
    if (currentIndex.type === 'reset') {
      setIsVisibleResetWinChance(true);
    }
  }, [currentIndex]);
  return (
    <div className="flex flex-col gap-[10px] mx-[15px]">
      <div className="text-center">ADD NEW STAKE</div>
      <InfoButton
        label={<StackSelection />}
        value={
          <span className="flex items-center gap-[3px]">
            <NumberProcess number={65.57} shouldRemoveFloat={false} />
            <span className="text-[#f8bf60]">%</span>
          </span>
        }
      />
      <StakeStatusBar />
      <StakeInfoButtons />
      <BetStatusBar />
      <RiskStake />
      <AddOrEditingButtons
        setCurrenIndex={setCurrenIndex}
        currentIndex={currentIndex}
        addTitle="ADD NEW CUSTOM STAKE"
      />
      <DividerDiv className="!bg-[#1c2127]" />
      <div>Custom Stakes</div>
      <CustomStakesTable
        headers={headers}
        list={list}
        currentId={currentIndex}
        setCurrenId={setCurrenIndex}
      />
      <ResetWinChanceModal
        isVisible={isVisibleResetWinChance}
        setIsVisible={setIsVisibleResetWinChance}
      />
    </div>
  );
};

export default CustomStakesTabContent;
