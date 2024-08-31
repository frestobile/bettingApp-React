import { useState } from 'react';
import Modal, { ModalHeader } from '../../shared/Modal';
import AccountTabHeaders from './AccountTabHeaders';
import AccountTabContent from './AccountTabContent';

const AccountModal = ({ isVisible, setIsVisible }) => {
  const [tab, setTab] = useState<1 | 2 | 3>(1);

  return (
    <Modal
      classNames="lg:w-[760px] !absolute !top-[20px] md:w-[570px] w-[95%] !gap-0 text-white !bg-[#1C2127]"
      onClose={() => {
        setIsVisible(false);
      }}
      showCloseButton
      title="USER STATS"
      isVisible={isVisible}
      isDefaultHeader={false}
    >
      <div
        className="flex flex-col
          gap-[10px] pb-[15px]
          xl:mx-[25px] lg:mx-[20px] md:mx-[15px] mx-[10px]
          xl:text-[12px] lg:text-[9.6px] md:text-[7.2px] text-[8px]
          "
      >
        <ModalHeader
          className="!border-none py-[20px]
        xl:text-[20px] lg:text-[16px] md:text-[12px] text-[12px]"
          onClose={() => {
            setIsVisible(false);
          }}
        >
          ACCOUNT
        </ModalHeader>
        <AccountTabHeaders currentTab={tab} setTab={setTab} />
        <AccountTabContent currentTab={tab} />
      </div>
    </Modal>
  );
};

export default AccountModal;
