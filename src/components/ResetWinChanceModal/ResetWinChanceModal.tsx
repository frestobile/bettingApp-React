import Button from '../../shared/Button';
import Modal from '../../shared/Modal';
import ResetWinChanceTable from './ResetWinChanceTable';

const ResetWinChanceModal = ({ isVisible, setIsVisible }) => {
  const headers = ['POOL', 'STAKE', 'REWARD', 'CHANCE', 'MULTIPLIER'];
  const list = [['STAKE', 100, 20000, 0.5, 200]];
  return (
    <Modal
      classNames="xl:w-[542px] lg:w-[433.6px] md:w-[325.2px] !gap-0
			text-white"
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
        <div
          className="text-center
				xl:text-[14px] md:text-[11.2px] lg:text-[8.4px]"
        >
          Are you sure you want to reset this stake to 100% win chance?
        </div>
        <ResetWinChanceTable headers={headers} list={list} />

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

export default ResetWinChanceModal;
