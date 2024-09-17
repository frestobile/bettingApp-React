import { useState } from 'react';
import Button from '../../shared/Button';
import Modal from '../../shared/Modal';
import BetStatusBar from '../HomePage/SecondSection/BetStatusBar';
import UnstakeInputTag from './UnstackInputTag';

const ConfrimUnstakeModal = ({ isVisible, setIsVisible }) => {
  const [unstake, setUnstake] = useState('281500');
  return (
    <Modal
      classNames="!gap-0
      md::w-[542px]
			text-white"
      // xl:w-[542px] lg:w-[433.6px] md:w-[325.2px]
      onClose={() => {
        setIsVisible(false);
      }}
      showCloseButton
      title="Reset Win Chance"
      isVisible={isVisible}
    >
      <div
        className="flex flex-col
          gap-[10px] mx-[15px] py-[15px]
          xl:text-[12px] lg:text-[9.6px] md:text-[7.2px]"
      >
        <UnstakeInputTag unstake={unstake} setUnstake={setUnstake} />
        <BetStatusBar />
        <div
          className="flex flex-row gap-[3px] mt-[5px]
				xl:text-[16px] md:text-[12.8px] md:text-[9.6px] "
        >
          <Button
            className="bg-[#1c2127] flex-1
					h-[48px] rounded-l-[5px]"
            onClick={() => {
              setIsVisible(false);
            }}
          >
            CANCEL
          </Button>
          <Button
            className="bg-[#1c2127] flex-1
					h-[48px] rounded-r-[5px]"
          >
            CONFIRM
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfrimUnstakeModal;
