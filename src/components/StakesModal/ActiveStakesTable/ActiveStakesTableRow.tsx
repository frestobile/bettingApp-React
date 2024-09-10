import Icon from '../../../shared/Icon';

const ActiveStakesTableRow = ({ tRow, setCurrenId, thisId }) => {
  // const onChangeInput = (e, ind) => {
  //   const { name, value } = e.target
  // }
  return tRow.map((r, i) => (
    <div
      key={i}
      className={`bg-[#1c2127] md:px-[5px] px-[1px] text-center justify-center items-center md:break-keep break-all flex flex-wrap ${
        i === tRow.length - 1 ? 'col-span-2' : 'border-r-[1px] border-[#2c3137]'
      }`}
    >
      {i === 0 ? (
        <input
          readOnly
          className="py-[3px] text-center bg-transparent w-full outline-none"
          value={r}
        />
      ) : (
        ''
      )}
      {i === 1 ? (
        <span className="flex items-center relative overflow-hidden">
          <Icon
            name="diamondIcon"
            className="absolute left-[5px] xl:w-[10px] xl:h-[10px]
            lg:w-[8px] lg:h-[8px] md:w-[6px] md:h-[6px]"
            color="f8bf60"
            raw
          />
          <input
            readOnly
            className={`bg-transparent outline-none text-center ${
              r.percent === null ? 'w-full px-[17px]' : 'pl-[17px] w-[60%]'
            }`}
            type="text"
            value={new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
              .format(r.value)
              .replace('$', '')}
          />
          {r.percent === null ? (
            <Icon
              name="dice"
              raw
              className="absolute right-[5px] xl:w-[10px] xl:h-[10px]
            lg:w-[8px] lg:h-[8px] md:w-[6px] md:h-[6px]"
            />
          ) : (
            <span className="flex items-center flex-auto">
              ({r.percent}
              <span className="text-[#f8bf60]">%</span>)
            </span>
          )}
        </span>
      ) : (
        ''
      )}
      {i === 2 || i === 3 || i === 4 ? (
        <span className="flex items-center">
          {i === 2 ? <Icon name="diamondIcon" color="#f8bf60" size={9} raw /> : ''}
          {i === 4 ? <span className="text-[#f8bf60] mr-[3px]">x</span> : ''}
          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
            .format(r)
            .replace('$', '')}
          {i === 3 ? <span className="text-[#f8bf60]">%</span> : ''}
        </span>
      ) : (
        ''
      )}
      {i === 5 ? (
        <span className="flex justify-between w-full h-full">
          <button
            onClick={() => {
              setCurrenId({ type: 'edit', id: thisId });
            }}
            className="flex flex-auto items-center
						px-[3px] justify-center gap-[2px]
				border-r-[1px] border-[#2c3137]"
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
						px-[3px] justify-center gap-[2px]
				border-r-[1px] border-[#2c3137]"
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
          <button
            className="flex flex-auto items-center
						px-[3px] justify-center gap-[2px]"
            onClick={() => {
              setCurrenId({ type: 'unstake', id: thisId });
            }}
          >
            <Icon
              name="XMarkIcon"
              raw
              className="xl:w-[10px] xl:h-[10px]
            lg:w-[8px] lg:h-[8px] md:w-[6px] md:h-[6px]"
            />
            UNSTAKE
          </button>
        </span>
      ) : (
        ''
      )}
    </div>
  ));
};

export default ActiveStakesTableRow;
