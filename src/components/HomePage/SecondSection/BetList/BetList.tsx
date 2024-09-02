import Icon from '../../../../shared/Icon';
import BetListItem from '../BetListItem';

const BetList = () => {
  const betList = [
    { d: 10000, x: 10, x2: 30 },
    { d: 9000, x: 500, x2: 25 },
    { d: 500, x: 100, x2: 50 },
    { d: 100, x: 4, x2: 100 },
    { d: 100, x: 3, x2: 150 },
    { d: 100, x: 2, x2: 50 },
    { d: 100, x: 1, x2: 5 },
    { d: 25, x: 3, x2: 2 },
    { d: 25, x: 2, x2: 1 },
    { d: 25, x: 1, x2: 7 }
  ];
  return (
    <div
      className="flex flex-col xl:gap-[15px] lg:gap-[12px] md:gap-[10px] gap-[8px]
    xl:px-[15px] lg:px-[12px] md:px-[9px] px-[6px]
        border-b-[1px] border-b-[#1c2127]"
    >
      <div
        className="bg-[#1c2127] text-white
            flex flex-row justify-center items-center w-full rounded-[5px]"
      >
        TOTAL BET:
        <span className="text-[#f8bf60]">$</span>
        100.0
        <Icon className="ml-[10px] !py-[8px]" name="pencil" />
      </div>
      <div className="grid grid-cols-12 gap-[5px] ">
        {betList.map((b, i) => (
          <BetListItem
            key={i}
            className={i > 5 ? 'col-span-3' : 'col-span-4'}
            dValue={b.d}
            xValue={b.x}
            xValue2={b.x2}
          />
        ))}
      </div>
    </div>
  );
};

export default BetList;
