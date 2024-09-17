import ScrollableComponent from '../../../shared/ScrollbarComponent';
import ActiveStakesTableRow from './ActiveStakesTableRow';

const ActiveStakesTable = ({ headers, list, currentId, setCurrenId }) => {
  return (
    <div className="xl:text-[10px] lg:text-[8px] md:text-[6px] text-[6px]">
      <div className={`w-full grid grid-cols-7 py-[5px]`}>
        {headers.map((h, i) => (
          <div
            key={i}
            className={`flex flex-wrap items-center justify-center
												flex-auto
                        bg-[#f8bf60] py-[5px]
                        border-[#1c2127]
                        text-black
                        ${i === 0 ? 'rounded-tl-[4px]' : ''}
                        ${
                          i === headers.length - 1
                            ? 'rounded-tr-[4px] col-span-2'
                            : 'border-r-[1px]'
                        }`}
          >
            {h}
          </div>
        ))}
      </div>
      <ScrollableComponent className="w-full max-h-[calc(100vh-595px)]">
        <div>
          {list.map((h, i) => (
            <div
              key={i}
              className={`grid grid-cols-7 w-full
						${i === list.length - 1 ? '' : 'mb-[4px]'}
						${currentId.id === i && currentId.type === 'edit' ? 'border-[#f8bf60] border' : ''}`}
            >
              <ActiveStakesTableRow thisId={i} tRow={h} setCurrenId={setCurrenId} />
            </div>
          ))}
        </div>
      </ScrollableComponent>
    </div>
  );
};

export default ActiveStakesTable;
