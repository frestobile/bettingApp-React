import Icon from '../../../shared/Icon';

const GameInfoTableRow = ({ tRow, isExpanded }) => {
  return tRow.map((r, i) => (
    <div
      key={i}
      className={`bg-[#1c2127] px-[5px] py-[3px]
      text-center justify-center items-center flex flex-wrap
      border-[#2c3137]
      ${i === tRow.length - 1 ? '' : 'border-r-[1px]'}
      ${!isExpanded && (i === 0 || i === 3) ? 'hidden' : ''}`}
    >
      {i === 0 || i === 1 ? r : ''}
      {i === 2 ? (
        <span className="flex items-center justify-center flex-wrap gap-x-[3px]">
          <Icon
            name="diamondIcon"
            color="#f8bf60"
            raw
            className="xl:w-[10px] xl:h-[10px]
            lg:w-[8px] lg:h-[8px] md:w-[6px] md:h-[6px]"
          />
          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
            .format(r)
            .replace('$', '')}
        </span>
      ) : (
        ''
      )}
      {i === 3 || i === 5 ? (
        r ? (
          <span className={`text-center ${r === 50 ? 'text-[#f8bf60]' : ''}`}>
            {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
              .format(r)
              .replace('$', '')}
            x
          </span>
        ) : (
          '-'
        )
      ) : (
        ''
      )}
      {i === 4 ? (
        r ? (
          <span className="text-center text-[#f8bf60]">
            {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
              .format(r)
              .replace('$', '')}
            x
          </span>
        ) : (
          '-'
        )
      ) : (
        ''
      )}
      {i === 6 ? <span className="text-center text-[#f8bf60]">{r}</span> : ''}
    </div>
  ));
};

export default GameInfoTableRow;
