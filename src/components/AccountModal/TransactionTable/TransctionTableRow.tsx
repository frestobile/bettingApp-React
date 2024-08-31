import Icon from '../../../shared/Icon';

const TransctionTableRow = ({ tRow }) => {
  return tRow.map((r, i) => (
    <div
      key={i}
      className={`bg-[#191e24] p-[5px] text-center justify-center items-center flex flex-wrap ${
        r && i !== 0 && i !== 3 ? 'text-[#f8bf60]' : ''
      }`}
    >
      {i < 3 ? r : ''}
      {i == 3 ? (
        <span className="flex items-center justify-center flex-wrap gap-x-[3px]">
          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
            .format(r)
            .replace('$', '')
            .replace(/\..*/g, '')}
          <Icon
            name="diamondIcon"
            color="#f8bf60"
            raw
            className="xl:w-[10px] xl:h-[10px]
            lg:w-[8px] lg:h-[8px] md:w-[6px] md:h-[6px]"
          />
        </span>
      ) : (
        ''
      )}
      {i === 4 ? (
        r ? (
          <span className="flex text-[#f8bf60] items-center justify-center flex-wrap gap-x-[3px]">
            {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
              .format(r)
              .replace('$', '')
              .replace(/\..*/g, '')}
            <Icon
              name="XMarkIcon"
              raw
              className="xl:w-[10px] xl:h-[10px]
            lg:w-[8px] lg:h-[8px] md:w-[6px] md:h-[6px]"
            />
          </span>
        ) : (
          '-'
        )
      ) : (
        ''
      )}
      {i === 5 ? (
        r ? (
          <span className="flex text-[#f8bf60] items-center justify-center flex-wrap gap-x-[3px]">
            {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
              .format(r)
              .replace('$', '')
              .replace(/\..*/g, '')}
            <Icon
              name="diamondIcon"
              color="#f8bf60"
              raw
              className="xl:w-[10px] xl:h-[10px]
            lg:w-[8px] lg:h-[8px] md:w-[6px] md:h-[6px]"
            />
          </span>
        ) : (
          '-'
        )
      ) : (
        ''
      )}
    </div>
  ));
};

export default TransctionTableRow;
