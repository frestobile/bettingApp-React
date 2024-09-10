import { useState } from 'react';
import TabItemButton from '../../TabItemButton';
import DividerDiv from '../../DividerDiv';
import DepositTabContent from './DepositTabContent';
import WithdrawTabContent from './WithdrawTabContent';

const CashierTabContent = () => {
  const address = 'ST5UH5COUN5VMF3YHZIJKZ2JOVAF4M71';
  const [tab, setTab] = useState<0 | 1>(0);
  const tabs = ['DEPOSIT', 'WITHDRAW'];
  return (
    <div className="flex flex-col gap-[10px] mx-[15px]">
      <div
        className="flex flex-row gap-x-[2px]
      h-[48px] "
      >
        {tabs.map((t, i) => (
          <TabItemButton
            key={i}
            isFirst={i === 0}
            isLast={i === tabs.length - 1}
            tab={tab}
            setTab={setTab}
            title={t}
            index={i}
          />
        ))}
      </div>
      <DividerDiv className="!bg-[#1c2127]" />
      {tab === 0 ? <DepositTabContent address={address} /> : ''}
      {tab === 1 ? <WithdrawTabContent address={address} /> : ''}
    </div>
  );
};

export default CashierTabContent;
