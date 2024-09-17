import Icon from '../../../../shared/Icon';
import ScrollableComponent from '../../../../shared/ScrollbarComponent';
import Dropdown from '../../Dropdown';

const MyBestList = ({
  betList,
  isShowDropdown,
  setIsShowDropdown,
  selectedBetList,
  setSelectedBetList
}) => {
  return (
    <div
      className="flex flex-row gap-x-[5px]
      xl:p-[15px] lg:p-[12px] md:px-[9px] p-[5px]
        border-b-[1px] border-b-[#1c2127]"
    >
      <Dropdown
        containerClasses="relative flex-row flex-none flex"
        btnClasses="!justify-between !bg-[#1c2127] rounded-l-[5px]
          xl:px-[15px] lg:px-[12px] px-[9px] xl:py-[10px] lg:py-[8px] py-[6px]
          gap-[25px]"
        arrowClasses="!static"
        isVisible={isShowDropdown}
        setIsVisible={setIsShowDropdown}
      >
        <div className="flex gap items-center">
          My Betlist (
          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
            .format(selectedBetList)
            .replace('$', '')}
          <Icon
            name="diamondIcon"
            color="#f8bf60"
            className="xl:w-[17px] xl:h-[17px]
            lg:w-[13.6px] lg:h-[13.6px] md:w-[11.2px] md:h-[11.2px] w-[8px] h-[8px]"
            raw
          />
          )
        </div>
        <div
          className={`${
            isShowDropdown ? '' : 'hidden'
          } rounded-[10px] z-[45] absolute top-[100%] mt-[5px] bg-[#2c3137] w-full`}
        >
          <ScrollableComponent className={` max-h-[200px]`}>
            {betList.length > 0
              ? betList.map((r: any, i: number) => (
                  <button
                    key={i}
                    onClick={() => {
                      setSelectedBetList(r);
                    }}
                    className="h-[35px] hover:bg-[#171c22] border-[1px] rounded-[10px] border-[#171c22] w-full flex items-center justify-center"
                  >
                    {r}
                  </button>
                ))
              : ''}
          </ScrollableComponent>
        </div>
      </Dropdown>
      <button className="bg-[#1c2127] flex-auto">IMPORT</button>
      <button className="bg-[#1c2127] rounded-r-[5px] flex-auto">EXPORT</button>
    </div>
  );
};

export default MyBestList;
