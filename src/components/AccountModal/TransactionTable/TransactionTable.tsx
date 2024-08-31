import ScrollableComponent from '../../../shared/ScrollbarComponent';
import TransctionTableRow from './TransctionTableRow';

const TransactionTable = ({ headers, list }) => {
  return (
    <>
      <div className={`bg-[#24292f] w-full grid grid-cols-6 py-[5px]`}>
        {headers.map((h, i) => (
          <div key={i} className="flex flex-wrap items-center justify-center">
            {h}
          </div>
        ))}
      </div>
      <ScrollableComponent className="w-full max-h-[calc(100vh-500px)]">
        <div className={`bg-[#24292f] p-[10px] gap-y-[10px]  w-full grid grid-cols-6`}>
          {list.map((h, i) => (
            <TransctionTableRow key={i} tRow={h} />
          ))}
        </div>
      </ScrollableComponent>
    </>
  );
};

export default TransactionTable;
