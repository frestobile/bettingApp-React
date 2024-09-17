import Modal from '../../../../shared/Modal';
import { useState } from 'react';
import BetList from '../BetList/BetList';
import MyBestList from '../MyBestList';
import AddNewBet from '../AddNewBet';
import Button from '../../../../shared/Button';

const BetListModal = ({
  betList,
  isVisible,
  setIsVisible,
  selectedBetList,
  setSelectedBetList
}) => {
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  return (
    <>
      <Modal
        classNames="lg:w-[450px] md:w-[400px] w-[98%] !gap-0"
        showCloseButton
        onClose={() => {
          setIsVisible(false);
        }}
        title="BETLIST"
        isVisible={isVisible}
      >
        <div
          className="flex flex-col
          xl:gap-[10px] lg:gap-[8px] md:gap-[6px] gap-[6px]
        xl:text-[12px] lg:text-[9.6px] md:text-[7.2px] text-[7px]
        "
        >
          <MyBestList
            isShowDropdown={isShowDropdown}
            setIsShowDropdown={setIsShowDropdown}
            betList={betList}
            selectedBetList={selectedBetList}
            setSelectedBetList={setSelectedBetList}
          />
          <BetList />
          <AddNewBet />
          <div
            className="flex flex-row gap-[3px]
          p-[15px]"
          >
            <Button className="!hover:bg-[#21262c] !bg-[#1c2127] !py-[10px] !rounded-l-[5px] !flex-auto">
              Clear Betlist
            </Button>
            <Button className="hover:mix-blend-difference !bg-[#f8bf60] !py-[10px] text-black !rounded-r-[5px] !flex-auto">
              Add to Betlist
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default BetListModal;
