import { useState } from 'react';
import TabItemButton from '../../TabItemButton';
import DividerDiv from '../../DividerDiv';
import BondTabContent from './BondTabContent';
import SwapTabContent from './SwapTabContent';

const GemsTabContent = () => {
  const [tab, setTab] = useState<0 | 1>(0);
  const tabs = ['BOND', 'SWAP'];
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
      {tab === 0 ? <BondTabContent /> : ''}
      {tab === 1 ? <SwapTabContent /> : ''}
    </div>
  );
};

export default GemsTabContent;
