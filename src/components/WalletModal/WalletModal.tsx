import { useState } from 'react';
import Modal from '../../shared/Modal';
import DividerDiv from '../DividerDiv';
import WalletTabItems from './WalletTabItems';
import CashierTabContent from './CashierTabContent';
import GemsTabContent from './GemsTabContent';
import TipTabContent from './TipTabContent';
import YieldTabContent from './YieldTabContent';

const WalletModal = ({ isVisible, setIsVisible }) => {
  const [tab, setTab] = useState<0 | 1 | 2 | 3>(0);

  return (
    <Modal
      classNames={`!gap-0 text-white
      md:w-[544px] w-[90%]
    `}
      // xl:w-[544px] lg:w-[435.2px] md:w-[326.4px]
      onClose={() => {
        setIsVisible(false);
      }}
      showCloseButton
      title="WALLET"
      isVisible={isVisible}
    >
      <div
        className="flex flex-col
          md:gap-[10px] pb-[25px] gap-[5px]
          pt-[10px] text-[8px]
          xl:text-[12px] lg:text-[9.6px] md:text-[7.2px]"
      >
        <WalletTabItems tab={tab} setTab={setTab} />
        <div className="md:mx-[15px] mx-[10px]">
          <DividerDiv className="!bg-[#1c2127]" />
        </div>
        {tab === 0 ? <CashierTabContent /> : ''}
        {tab === 1 ? <GemsTabContent /> : ''}
        {tab === 2 ? <YieldTabContent /> : ''}
        {tab === 3 ? <TipTabContent /> : ''}
      </div>
    </Modal>
  );
};

export default WalletModal;
