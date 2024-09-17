import Icon from '../../../shared/Icon';

const CustomStakesTableRow = ({ tRow, setCurrenId, thisId }) => {
  // const onChangeInput = (e, ind) => {
  //   const { name, value } = e.target
  // }
  return tRow.map((r, i) => (
    <div
      key={i}
      className={`bg-[#1c2127] px-[5px] text-center justify-center items-center md:break-keep break-all flex flex-wrap ${
        i === tRow.length - 1 ? 'col-span-2' : 'border-r-[1px] border-[#2c3137]'
      }`}
    >
      {i === 0 ? (
        <input className="py-[3px] text-center bg-transparent w-full outline-none" value={r} />
      ) : (
        ''
      )}
      {i === 2 || i === 3 || i === 4 || i === 1 ? (
        <span className="flex items-center">
          {i === 2 ? (
            <Icon
              name="diamondIcon"
              color="#f8bf60"
              className="xl:w-[10px] xl:h-[10px]
            lg:w-[8px] lg:h-[8px] md:w-[6px] md:h-[6px]"
              raw
            />
          ) : (
            ''
          )}
          {i === 4 ? <span className="text-[#f8bf60] mr-[3px]">x</span> : ''}
          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
            .format(r)
            .replace('$', '')}
          {i === 3 || i === 1 ? <span className="text-[#f8bf60]">%</span> : ''}
        </span>
      ) : (
        ''
      )}
      {i === 5 ? (
        <span className="flex justify-between w-full h-full">
          <button
            className="flex flex-auto items-center
						px-[3px] justify-center gap-[2px]
				border-r-[1px] border-[#2c3137]"
            onClick={() => {
              setCurrenId({ type: 'edit', id: thisId });
            }}
          >
            <Icon
              name="pencil"
              raw
              className="xl:w-[10px] xl:h-[10px]
            lg:w-[8px] lg:h-[8px] md:w-[6px] md:h-[6px]"
            />
            EDIT
          </button>
          <button
            className="flex flex-auto items-center
						px-[3px] justify-center gap-[2px]"
            onClick={() => {
              setCurrenId({ type: 'reset', id: thisId });
            }}
          >
            <Icon
              name="SyncIcon"
              raw
              className="xl:w-[10px] xl:h-[10px]
            lg:w-[8px] lg:h-[8px] md:w-[6px] md:h-[6px]"
            />
            RESET
          </button>
        </span>
      ) : (
        ''
      )}
    </div>
  ));
};

export default CustomStakesTableRow;
