import { useState } from 'react';
import Modal from '../../shared/Modal';
import StakesTabItems from './StakesTabItems';
import DividerDiv from '../DividerDiv';
import ActiveStakesTabContent from './ActiveStakesTabContent';
import CustomStakesTabContent from './CustomStakesTabContent';
import PreviousResultsTabContent from './PreviousResultsTabContent';

const StakesModal = ({ isVisible, setIsVisible }) => {
  const [tab, setTab] = useState<0 | 1 | 2>(0);
  return (
    <Modal
      classNames="xl:w-[805px] lg:w-[644px] md:w-[483px] !gap-0 text-white
      w-[95%]
            !absolute !top-[10px]"
      onClose={() => {
        setIsVisible(false);
      }}
      showCloseButton
      title="Stakes"
      isVisible={isVisible}
    >
      <div
        className="flex flex-col
          gap-[10px] mx-[15px] py-[15px] text-[8px]
          xl:text-[12px] lg:text-[9.6px] md:text-[7.2px]"
      >
        <StakesTabItems tab={tab} setTab={setTab} />
        <DividerDiv className="!bg-[#1c2127]" />

        {tab === 0 ? <ActiveStakesTabContent /> : ''}
        {tab === 1 ? <CustomStakesTabContent /> : ''}
        {tab === 2 ? <PreviousResultsTabContent /> : ''}
      </div>
    </Modal>
  );
};

export default StakesModal;
