import TransactionInfo from '../TransactionInfo';
import TranscationTables from '../TranscationTables';

const TransactionsTab = () => {
  return (
    <div
      className="flex flex-col items-center
        py-[10px] gap-y-[10px]"
    >
      <TransactionInfo />
      <div className="h-[1px] mt-[1px] bg-[#3c3f42] w-full" />
      <TranscationTables />
    </div>
  );
};

export default TransactionsTab;
