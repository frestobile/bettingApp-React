const PreviousResultsTableRow = ({ tRow }) => {
  return tRow.map((r, i) => (
    <div
      key={i}
      className={`bg-[#1c2127] py-[5px] px-[5px] text-center justify-center items-center flex flex-wrap ${
        i === tRow.length - 1 ? '' : 'border-r-[1px] border-[#2c3137]'
      }`}
    >
      {r}
    </div>
  ));
};

export default PreviousResultsTableRow;
