import { useState } from 'react';
import Icon from '../../../../shared/Icon';
import ShadowButton from '../../../../shared/ShadowButton';
import AutoPlayBar from './AutoPlayBar';
import BetListModal from '../BetListModal';
import { useMain } from '../../../../providers/MainProvider';

const PlayActionPart = () => {
  const [isOpenAutoPlaySetting, setIsOpenAutoPlaySetting] = useState(false);
  const betList = [5, 10];
  const [isVisible, setIsVisible] = useState(false);
  const [selectedBetList, setSelectedBetList] = useState(5);
  const { isPlaying, setIsPlaying } = useMain();

  return (
    <div
      className="bg-[#2c3137] md:col-span-4 md:order-2 order-3 flex flex-col gap-[10px]
    justify-center
    px-[3px] py-[10px] text-white"
    >
      <div className="flex flex-row gap-[2px] h-[38px] relative">
        <ShadowButton
          disabled={isPlaying}
          onClick={() => {
            setIsVisible(!isVisible);
          }}
          className={`basis-[27%] leading-none
          text-[black] flex justify-center items-center
          h-[100%] rounded-l-[5px] ${
            isPlaying
              ? 'bg-[#767676] shadow-[0px_6px_0px_0px_rgba(82,86,89,1)] !transform-none'
              : 'bg-[#f8bf60] hover:mix-blend-difference shadow-[0px_6px_0px_0px_rgba(153,122,73,1)]'
          }`}
        >
          {isVisible ? (
            <Icon
              name="Close"
              color="black"
              className="xl:h-[22px] lg:h-[17.6px] md:h-[13.2px] xl:w-[22px] lg:w-[17.6px] md:w-[13.2px]"
              raw
            />
          ) : (
            <Icon
              name="layerGroup"
              color="black"
              className="xl:h-[22px] lg:h-[17.6px] md:h-[13.2px] xl:w-[22px] lg:w-[17.6px] md:w-[13.2px]"
              raw
            />
          )}
        </ShadowButton>
        <ShadowButton
          disabled={isPlaying}
          onClick={() => {
            setIsPlaying(true);
          }}
          className={`text-[13px] xl:text-[26px] lg:text-[20.8px] md:text-[15.6px]
          basis-[46%] leading-none items-center text-[black]
          ${
            isPlaying
              ? 'bg-[#767676] shadow-[0px_6px_0px_0px_rgba(82,86,89,1)] !transform-none'
              : 'hover:mix-blend-difference shadow-[0px_6px_0px_0px_rgba(153,122,73,1)] bg-[#f8bf60]'
          }`}
        >
          PLAY
        </ShadowButton>
        <ShadowButton
          disabled={isPlaying}
          onClick={() => {
            setIsOpenAutoPlaySetting(!isOpenAutoPlaySetting);
          }}
          className={`basis-[27%] text-[black] flex justify-center items-center
          ${
            isPlaying
              ? 'bg-[#767676] shadow-[0px_6px_0px_0px_rgba(82,86,89,1)] !transform-none'
              : 'hover:mix-blend-difference shadow-[0px_6px_0px_0px_rgba(153,122,73,1)] bg-[#f8bf60]'
          }
          h-[100%] rounded-r-[5px]`}
        >
          {isOpenAutoPlaySetting ? (
            <Icon
              name="Close"
              color="black"
              className="xl:h-[22px] lg:h-[17.6px] md:h-[13.2px] xl:w-[22px] lg:w-[17.6px] md:w-[13.2px]"
              raw
            />
          ) : (
            <Icon
              name="SyncIcon"
              color="black"
              className="xl:h-[22px] lg:h-[17.6px] md:h-[13.2px] xl:w-[22px] lg:w-[17.6px] md:w-[13.2px]"
              raw
            />
          )}
        </ShadowButton>
        {isOpenAutoPlaySetting ? (
          <AutoPlayBar className="absolute bottom-[calc(100%+3px)] rounded-[5px] p-2" />
        ) : (
          ''
        )}
      </div>
      {/* <div
        className="flex flex-row
        gap-[2px]
        mt-[6px] h-[26px]
        lg:text-[6.4px] md:text-[4.8px] xl:text-[8px]"
      >
        <button
          type="button"
          onClick={() => {
            setIsVisible(!isVisible);
          }}
          className="bg-[#1c2127] basis-1/2 flex flex-row justify-center rounded-l-[5px] whitespace-nowrap items-center"
        >
          ACTIVATE BET-LIST
        </button>
        <div className="bg-[#1c2127] basis-1/2 flex overflow-hidden flex-row justify-center whitespace-nowrap items-center rounded-r-[5px]">
          VIEW BET-LIST (TOTAL:
          <Icon name="diamondIcon" color="#f8bf60" size={10} raw />
          &nbsp;
          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
            .format(5)
            .replace('$', '')}
          )
        </div>
      </div> */}
      <BetListModal
        betList={betList}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        selectedBetList={selectedBetList}
        setSelectedBetList={setSelectedBetList}
      />
    </div>
  );
};

export default PlayActionPart;
