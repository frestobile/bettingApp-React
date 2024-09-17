import { useState } from 'react';
import Icon from '../../../../shared/Icon';
import CheckBox from '../../TipTabContent/Checkbox';

const RiskStake = () => {
  const [isLeft, setIsLeft] = useState(false);
  return (
    <div className="flex text-[#f8bf60]">
      <CheckBox className="scale-[0.4] mt-[-3px]" isLeft={isLeft} setIsLeft={setIsLeft} />
      <span className="flex flex-col justify-center">
        <span className="flex flex-row items-center">
          <Icon name="dice" className="mr-[4px]" raw size={12} /> Risk Stake
        </span>
        <>Stake is risked, but potential rewards are much greater.</>
      </span>
    </div>
  );
};

export default RiskStake;
