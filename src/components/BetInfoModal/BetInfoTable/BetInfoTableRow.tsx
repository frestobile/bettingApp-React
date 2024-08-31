import Icon from '../../../shared/Icon';

const BetinfoTableRow = ({ tRow, isExpanded }) => {
  return tRow.map((r, i) => (
    <div
      key={i}
      className={`bg-[#1c2127] px-[5px] py-[3px]
      text-center justify-start items-center flex flex-wrap
      xl:pl-[7px] lg:pl-[5.6px] md:pl-[5.2px]
      border-[#2c3137]
      ${i === tRow.length - 1 ? '' : 'border-r-[1px]'}
      ${isExpanded && i === 4 ? 'hidden' : ''}
      ${!isExpanded && (i === 0 || i === 2 || i === 5) ? 'hidden' : ''}`}
    >
      {i === 0 ? r : ''}
      {i === 2
        ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
            .format(r)
            .replace('$', '') + 'x'
        : ''}
      {i === 1 || i === 4 ? (
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
      {i === 5 ? (
        <span className="flex text-[#f8bf60] items-center justify-center flex-wrap gap-x-[3px]">
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
      {i === 3 ? (
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

export default BetinfoTableRow;
