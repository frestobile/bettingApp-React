import ResetWinChanceTableRow from './ResetWinChanceTableRow';

const ResetWinChanceTable = ({ headers, list }) => {
  return (
    <div className="xl:text-[11.21px] lg:text-[8.968px] md:text-[6.726px] relative">
      <div className={`w-full grid grid-cols-5 py-[7px]`}>
        {headers.map((h, i) => (
          <div
            key={i}
            className={`flex flex-wrap items-center justify-center
                  bg-[#f8bf60] py-[5px] flex-1
                  border-[#1c2127]
                  text-black
                  ${i === 0 ? 'rounded-tl-[4px]' : ''}
                  ${i === headers.length - 1 ? 'rounded-tr-[4px]' : 'border-r-[1px]'}`}
          >
            {h}
          </div>
        ))}
      </div>
      <div className={` gap-y-[4px] w-full grid grid-cols-5`}>
        {list.map((h, i) => (
          <ResetWinChanceTableRow key={i} tRow={h} />
        ))}
      </div>
    </div>
  );
};

export default ResetWinChanceTable;
