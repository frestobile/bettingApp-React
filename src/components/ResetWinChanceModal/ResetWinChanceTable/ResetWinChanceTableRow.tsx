import Icon from '../../../shared/Icon';

const ResetWinChanceTable = ({ tRow }) => {
  return tRow.map((r, i) => (
    <div
      key={i}
      className={`bg-[#1c2127] px-[5px] py-[4px]
      text-center justify-center items-center flex flex-wrap
      border-[#2c3137]
      ${i === tRow.length - 1 ? '' : 'border-r-[1px]'}`}
    >
      {i === 0 ? r : ''}
      {i === 1 || i === 2 ? (
        <span className="flex items-center justify-center flex-wrap gap-x-[3px]">
          <Icon name="diamondIcon" color="#f8bf60" raw size={12} />
          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
            .format(r)
            .replace('$', '')}
        </span>
      ) : (
        ''
      )}
      {i === 4 || i === 3 ? (
        <span className={`text-center flex items-center`}>
          {i === 4 ? <span className="text-[#f8bf60] mr-[3px]">x</span> : ''}
          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
            .format(r)
            .replace('$', '')}
          {i === 3 ? <span className="text-[#f8bf60]">%</span> : ''}
        </span>
      ) : (
        ''
      )}
    </div>
  ));
};

export default ResetWinChanceTable;
