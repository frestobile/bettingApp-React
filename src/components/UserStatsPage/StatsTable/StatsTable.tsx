import Icon from '../../../shared/Icon';

const StatsTable = () => {
  return (
    <div
      className="grid grid-cols-7
        gap-x-[1px] gap-y-[3px] text-center"
    >
      <div className="py-[5px] bg-[#F8BF60] rounded-tl-[5px]">GAMES</div>
      <div className="py-[5px] bg-[#F8BF60] text-black">BETS</div>
      <div className="py-[5px] bg-[#F8BF60] text-black">WAGERED</div>
      <div className="py-[5px] bg-[#F8BF60] text-black">PROFIT</div>
      <div className="py-[5px] bg-[#F8BF60] text-black">PROFIT ATH</div>
      <div className="py-[5px] bg-[#F8BF60] text-black">BALANCE</div>
      <div className="py-[5px] bg-[#F8BF60] rounded-tr-[5px]">BALACE ATH</div>

      <div className="py-[5px] bg-[#1C2127]">
        {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
          .format(77777)
          .replace('$', '')}
      </div>
      <div className="py-[5px] bg-[#1C2127]">troyr3750</div>
      <div className="py-[5px] bg-[#1C2127]">
        <span
          className="flex flex-row
                gap-x-[3px] justify-center items-center"
        >
          <Icon name="diamondIcon" raw color="#F8BF60" />
          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
            .format(777777.77)
            .replace('$', '')}
        </span>
      </div>
      <div className="py-[5px] text-[#F8BF60] bg-[#1C2127]">
        <span
          className="flex flex-row
                gap-x-[3px] justify-center items-center"
        >
          <Icon name="diamondIcon" raw color="#F8BF60" />
          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
            .format(777777.77)
            .replace('$', '')}
        </span>
      </div>
      <div className="py-[5px] text-[#F8BF60] bg-[#1C2127]">
        <span
          className="flex flex-row
                gap-x-[3px] justify-center items-center"
        >
          <Icon name="diamondIcon" raw color="#F8BF60" />
          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
            .format(777777.77)
            .replace('$', '')}
        </span>
      </div>
      <div className="py-[5px] text-[#F8BF60] bg-[#1C2127]">
        <span
          className="flex flex-row
                gap-x-[3px] justify-center items-center"
        >
          <Icon name="diamondIcon" raw color="#F8BF60" />
          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
            .format(777777.77)
            .replace('$', '')}
        </span>
      </div>
      <div className="py-[5px] text-[#F8BF60] bg-[#1C2127]">
        <span
          className="flex flex-row
                gap-x-[3px] justify-center items-center"
        >
          <Icon name="diamondIcon" raw color="#F8BF60" />
          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
            .format(777777.77)
            .replace('$', '')}
        </span>
      </div>
    </div>
  );
};

export default StatsTable;
