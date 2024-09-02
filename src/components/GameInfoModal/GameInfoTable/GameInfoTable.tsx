import Icon from '../../../shared/Icon';
import ScrollableComponent from '../../../shared/ScrollbarComponent';
import GameInfoTableRow from './GameInfoTableRow';

const GameInfoTable = ({ headers, list, isExpanded = false, setIsExpanded = null }) => {
  const toggleExpand = () => {
    if (setIsExpanded !== null) {
      setIsExpanded(!isExpanded);
    }
  };
  return (
    <div className="xl:text-[10px] lg:text-[8px] md:text-[6px] text-[6px] break-all text-center relative">
      <div className={`w-full grid ${isExpanded ? 'grid-cols-7' : 'grid-cols-5'} py-[5px]`}>
        {headers.map((h, i) => (
          <div
            key={i}
            {...(i === headers.length - 1 && { onClick: toggleExpand })}
            className={`flex flex-wrap items-center justify-center
                  bg-[#f8bf60] py-[5px] flex-1
                  border-[#1c2127]
                  text-black
                  ${!isExpanded && (i === 0 || i === 3) ? 'hidden' : ''}
                  ${i === 0 ? 'rounded-tl-[4px]' : ''}
                  ${i === headers.length - 1 ? 'rounded-tr-[4px]' : 'border-r-[1px]'}`}
          >
            {h}
          </div>
        ))}
      </div>
      <ScrollableComponent className=" w-full max-h-[calc(100vh-595px)]">
        <div className={` gap-y-[4px] w-full grid ${isExpanded ? 'grid-cols-7' : 'grid-cols-5'} `}>
          {list.map((h, i) => (
            <GameInfoTableRow isExpanded={isExpanded} key={i} tRow={h} />
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

export default GameInfoTable;
