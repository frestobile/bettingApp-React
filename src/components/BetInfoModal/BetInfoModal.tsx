import { useEffect, useState } from 'react';
import Modal from '../../shared/Modal';
import DividerDiv from '../DividerDiv';
import ShortBetInfo from './ShortBetInfo';
import DetailedBetInfo from './DetailedBetInfo';

const BetInfoModal = ({ isVisible, setIsVisible }) => {
  const [isDropped, setIsDropped] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  useEffect(() => {
    if (!isDropped) {
      setIsExpanded(false);
    }
  }, [isDropped]);
  return (
    <Modal
      classNames={`!gap-0 text-white
      !absolute w-[95%] top-[10px] ${
        isExpanded
          ? 'xl:w-[800px] lg:w-[640px] md:w-[480px]'
          : 'xl:w-[700px] lg:w-[560px] md:w-[400px]'
      }`}
      onClose={() => {
        setIsVisible(false);
      }}
      showCloseButton
      title="BET INFORMATION"
      isVisible={isVisible}
    >
      <div
        className="flex flex-col
            md:gap-[10px] mx-[5px] pb-[15px] gap-[5px]
            xl:text-[12px] lg:text-[9.6px] md:text-[7.2px] text-[8px]"
      >
        <ShortBetInfo />
        <DividerDiv className="!bg-[#1c2127]" />
        <DetailedBetInfo
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
          isDropped={isDropped}
          setIsDropped={setIsDropped}
        />
      </div>
    </Modal>
  );
};

export default BetInfoModal;
