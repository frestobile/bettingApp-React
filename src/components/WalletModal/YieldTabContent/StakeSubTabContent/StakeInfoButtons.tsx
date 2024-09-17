import Icon from '../../../../shared/Icon';
import InfoButton from './InfoButton';

const StakeInfoButtons = () => {
  return (
    <div className="flex flex-row gap-[2px]">
      <InfoButton
        btnClass="flex-auto !justify-between !rounded-r-[0px]"
        labelClass="!static"
        label="REWARD"
        value={
          <span className="flex text-[#f8bf60] items-center gap-[3px]">
            281,500.00
            <Icon name="diamondIcon" color="#f8bf60" size={12} raw />
          </span>
        }
      />
      <InfoButton
        btnClass="flex-auto !justify-between !rounded-l-[0px]"
        labelClass="!static"
        label={
          <span className="text-left flex flex-col">
            <p>Reward Chance</p>
            <p>Payout</p>
          </span>
        }
        value={
          <span className="text-[#f8bf60] text-right flex flex-col">
            <p>27.41 %</p>
            <p>2.81 x</p>
          </span>
        }
      />
    </div>
  );
};

export default StakeInfoButtons;
