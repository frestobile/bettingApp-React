import Icon from '../../../shared/Icon';
import ScrollableComponent from '../../../shared/ScrollbarComponent';
import BetInfoTableRow from './BetInfoTableRow';

const BetInfoTable = ({ headers, list, isExpanded = false, setIsExpanded = null }) => {
  const toggleExpand = () => {
    if (setIsExpanded !== null) {
      setIsExpanded(!isExpanded);
    }
  };
  return (
    <div className="xl:text-[10px] lg:text-[8px] md:text-[6px] relative text-[6px] break-all text-center">
      <div className={`w-full grid ${isExpanded ? 'grid-cols-6' : 'grid-cols-4'} py-[5px]`}>
        {headers.map((h, i) => (
          <div
            key={i}
            {...(i === headers.length - 1 && { onClick: toggleExpand })}
            className={`flex flex-wrap items-center justify-start
                  bg-[#f8bf60] py-[5px] flex-1
                  border-[#1c2127]
                  text-black
                  xl:pl-[7px] lg:pl-[5.6px] md:pl-[5.2px]
                  ${!isExpanded && i === 1 ? 'rounded-tl-[4px]' : ''}
                  ${!isExpanded && (i === 0 || i === 2 || i === 5) ? 'hidden' : ''}
                  ${isExpanded && i === 4 ? 'hidden' : ''}
                  ${i === 0 ? 'rounded-tl-[4px]' : ''}
                  ${i === headers.length - 1 ? 'rounded-tr-[4px]' : 'border-r-[1px]'}`}
          >
            {h}
          </div>
        ))}
      </div>
      <ScrollableComponent className=" w-full max-h-[calc(100vh-655px)]">
        <div className={` gap-y-[4px] w-full grid ${isExpanded ? 'grid-cols-6' : 'grid-cols-4'} `}>
          {list.map((h, i) => (
            <BetInfoTableRow isExpanded={isExpanded} key={i} tRow={h} />
          ))}
        </div>
      </ScrollableComponent>
      <Icon
        name="sortArrowDown"
        size={8}
        color="white"
        className="left-[50%] translate-x-[-50%] absolute bottom-[-5px]"
      />
    </div>
  );
};

export default BetInfoTable;
