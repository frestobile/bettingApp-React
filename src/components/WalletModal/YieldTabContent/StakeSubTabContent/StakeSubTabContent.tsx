import Button from '../../../../shared/Button';
import Icon from '../../../../shared/Icon';
import DividerDiv from '../../../DividerDiv';
import BetStatusBar from '../../../HomePage/SecondSection/BetStatusBar';
import NextRewardTime from '../NextRewardTime';
import YieldInfo from '../YieldInfo';
import InfoButton from './InfoButton';
import StakeInfoButtons from './StakeInfoButtons';
import StakeStatusBar from './StakeStatusBar';
import WagerResults from '../WagerSubTabContent/WagerResults';
import ScrollableComponent from '../../../../shared/ScrollbarComponent';
import RiskStake from './RiskStake';

const StakeSubTabContent = () => {
  return (
    <ScrollableComponent className="max-h-[400px]">
      <div className="flex flex-col gap-[10px]">
        <NextRewardTime />
        <DividerDiv className="!bg-[#1c2127]" />
        <YieldInfo />
        <DividerDiv className="!bg-[#1c2127]" />
        <InfoButton
          label="STAKE"
          value={
            <span className="flex items-center gap-[3px]">
              17,500
              <Icon name="diamondIcon" color="f8bf60" size={12} raw />
            </span>
          }
        />
        <StakeStatusBar />
        <StakeInfoButtons />
        <BetStatusBar />
        <RiskStake />
        <Button
          className="bg-[#f8bf60] text-black
      rounded-[5px]
      xl:text-[14px] lg:text-[10.8px] md:text-[8.4px]
      h-[48px] "
        >
          STAKE
        </Button>
        <DividerDiv className="!bg-[#1c2127]" />
        <Button
          className="bg-[#f8bf60] text-black
      flex items-center
      px-[10px] my-[5px]
      rounded-[5px]
      h-[36px] !justify-between w-full"
        >
          Your Stakes
          <Icon name="openInNew" size={14} />
        </Button>
        <div className="flex flex-col gap-[3px]">
          <WagerResults type="Staked" />
        </div>
      </div>
    </ScrollableComponent>
  );
};

export default StakeSubTabContent;
