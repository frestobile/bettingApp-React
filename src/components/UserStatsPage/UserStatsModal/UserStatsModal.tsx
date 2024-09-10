// import { useUserStats } from "../../../providers/UserStatsProvider";
import Modal from '../../../shared/Modal';
import DropDownButton from '../DropDownButton';
import StatsTable from '../StatsTable';
import UserStatus from '../UserStatus';
import Chart from '../Chart';
import { useState } from 'react';

const UserStatsModal = ({ isVisible, setIsVisible }) => {
  const [isDropped, setIsDropped] = useState(false);
  return (
    <Modal
      classNames="md:w-[700px] !gap-0 text-white
      w-[95%]"
      // xl:w-[700px] lg:w-[560px] md:w-[400px]
      onClose={() => {
        setIsVisible(false);
      }}
      showCloseButton
      title="USER STATS"
      isVisible={isVisible}
    >
      <div
        className="flex flex-col
        gap-[10px] pb-[15px]
        xl:mx-[15px] lg:mx-[12px] md:mx-[9px] mx-[9px]
        break-all
        xl:text-[12px] lg:text-[9.6px] md:text-[7.2px] text-[8px]
        "
      >
        <UserStatus />
        <div className="w-full h-[1px] bg-[#1C2127] " />
        <StatsTable />
        <div className="w-full h-[1px] bg-[#1C2127] " />
        <div className="flex flex-col items-center justify-center gap-[10px]">
          <DropDownButton
            isVisible={isDropped}
            isRevertIcon={false}
            setIsVisible={setIsDropped}
            className="w-[130px] !bg-[#1C2127]"
          >
            PROFIT
          </DropDownButton>
          <Chart />
        </div>
      </div>
    </Modal>
  );
};

export default UserStatsModal;
