import { useState } from 'react';
import Icon from '../../../shared/Icon';
import TransactionInfoItem from './InfoItem';
import CheckBox from '../CheckBox';

const TransactionInfo = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <TransactionInfoItem text="Bets">
        <span className="text-white p-[5px]">25,000</span>
      </TransactionInfoItem>
      <TransactionInfoItem text="Total Wagered">
        <span
          className="text-[white] p-[5px] flex items-center justify-center
                gap-x-[3px]"
        >
          25,000
          <Icon color="#f8bf60" name="diamondIcon" raw size={13} />
        </span>
      </TransactionInfoItem>
      <TransactionInfoItem text="Net Profit">
        <span
          className="text-[#f8bf60] p-[5px] flex items-center justify-center
                gap-x-[3px]"
        >
          25,000
          <Icon color="#f8bf60" name="diamondIcon" raw size={13} />
        </span>
      </TransactionInfoItem>
      <TransactionInfoItem text="Profit (All-Time High)">
        <span
          className="text-[#f8bf60] p-[5px] flex items-center justify-center
                gap-x-[3px]"
        >
          25,000
          <Icon color="#f8bf60" name="diamondIcon" raw size={13} />
        </span>
      </TransactionInfoItem>
      <div className="h-[1px] mt-[10px] bg-[#3c3f42] w-full" />
      <TransactionInfoItem text="Bets">
        <CheckBox isChecked={isChecked} handleCheckboxChange={handleCheckboxChange} />
      </TransactionInfoItem>
    </>
  );
};

export default TransactionInfo;
