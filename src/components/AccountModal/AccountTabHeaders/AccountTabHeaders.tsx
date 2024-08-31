import Button from '../../../shared/Button';

const AccountTabHeaders = ({ currentTab, setTab }) => {
  return (
    <div
      className="flex flex-row justify-center
        border-b-[3px] !border-[#2c3137]
        items-center
        xl:gap-[20px] lg:gap-[16px] md:gap-[12px] gap-[10px]"
    >
      <Button
        onClick={() => {
          setTab(1);
        }}
        className={
          currentTab === 1
            ? 'p-[5px] translate-y-[3px] !text-[#F8BF60] !border-b-[3px] !border-[#F8BF60]'
            : 'p-[5px] translate-y-[3px] !border-none'
        }
      >
        Security
      </Button>
      <Button
        onClick={() => {
          setTab(2);
        }}
        className={
          currentTab === 2
            ? 'p-[5px] translate-y-[3px] !text-[#F8BF60] !border-b-[3px] !border-[#F8BF60]'
            : 'p-[5px] translate-y-[3px] !border-none'
        }
      >
        Transactions
      </Button>
      <Button
        onClick={() => {
          setTab(3);
        }}
        className={
          currentTab === 3
            ? 'p-[5px] translate-y-[3px] !text-[#F8BF60] !border-b-[3px] !border-[#F8BF60]'
            : 'p-[5px] translate-y-[3px] !border-none'
        }
      >
        Stats
      </Button>
    </div>
  );
};

export default AccountTabHeaders;
