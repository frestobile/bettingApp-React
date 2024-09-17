import { useState } from 'react';
import TabItemButton from '../../TabItemButton';
import DividerDiv from '../../DividerDiv';
import WagerSubTabContent from './WagerSubTabContent';
import YieldTabContentFooter from './YieldTabContentFooter';
import AffiliateSubTabContent from './AffiliateSubTabContent';
import StakeSubTabContent from './StakeSubTabContent';

const YieldTabContent = () => {
  const [tab, setTab] = useState<0 | 1 | 2>(0);
  const tabs = [
    ['WAGER POOL', '(+210.50K% APY)'],
    ['AFFILIATE POOL', '(+72.78K% APY)'],
    ['STAKE POOL', '(+72.78K% APY)']
  ];
  return (
    <div className="flex flex-col md:gap-[10px] gap-[5px]">
      <div
        className="flex flex-row gap-x-[2px]
        mx-[15px]
        h-[48px] "
      >
        {tabs.map((t, i) => (
          <TabItemButton
            key={i}
            isFirst={i === 0}
            isLast={i === tabs.length - 1}
            tab={tab}
            setTab={setTab}
            className=""
            title={
              <div className="flex flex-col justify-center items-center">
                <span>{t[0]}</span>
                <span>{t[1]}</span>
              </div>
            }
            index={i}
          />
        ))}
      </div>
      <div className="flex flex-col gap-[10px] mx-[15px] ">
        <DividerDiv className="!bg-[#1c2127]" />
        {tab === 0 ? <WagerSubTabContent /> : ''}
        {tab === 1 ? <AffiliateSubTabContent /> : ''}
        {tab === 2 ? <StakeSubTabContent /> : ''}
      </div>

      <DividerDiv className="!bg-[#1c2127]" />
      <YieldTabContentFooter />
    </div>
  );
};

export default YieldTabContent;
