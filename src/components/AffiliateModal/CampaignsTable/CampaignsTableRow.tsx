const CampaignsTableRow = ({ tRow }) => {
  const addNew = [...tRow];
  addNew.push('COPY');
  return (
    <div>
      {
        addNew.map((r, i) => (
          <div
            key={i}
            className={`bg-[#1c2127] px-[5px] py-[3px] text-center justify-center items-center flex flex-wrap ${
              r && i !== 0 && i !== 3 ? 'text-[#f8bf60]' : ''
            }`}
          >
            {i === 0 ? r : ''}
            {i === 1 || i === 2 || i === 3 || i === 5 || i === 6
              ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
                  .format(r)
                  .replace('$', '')
                  .replace(/\..*/g, '')
              : ''}
            {i === 4 ? r + '%' : ''}
            {i === 7 ? (
              <span
                className="text-black bg-[#f8bf60]
                  p-[4px] rounded-[5px]"
              >
                {r}
              </span>
            ) : (
              ''
            )}
          </div>
        ))
      }
    </div>
  );
};

export default CampaignsTableRow;
