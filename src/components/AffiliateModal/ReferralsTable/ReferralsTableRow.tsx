const ReferralsTableRow = ({ tRow }) => {
  return tRow.map((r, i) => (
    <div
      key={i}
      className={`bg-[#1c2127] px-[5px] py-[3px] text-center justify-center items-center flex flex-wrap 
        }`}
    >
      {i === 0 || i === 1 || i === 3 || i === 4 ? r : ''}
      {i === 2
        ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
            .format(r)
            .replace('$', '')
            .replace(/\..*/g, '')
        : ''}
      {i === 5 || i === 6
        ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
            .format(r)
            .replace('$', '')
        : ''}
    </div>
  ));
};

export default ReferralsTableRow;
