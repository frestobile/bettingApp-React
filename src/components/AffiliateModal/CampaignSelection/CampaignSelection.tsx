import { useState } from 'react';
import DropDownButton from '../../UserStatsPage/DropDownButton';
import ScrollableComponent from '../../../shared/ScrollbarComponent';

const CampaignSelection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const campaignNames = [
    'CAMPAIGN NAME',
    'CAMPAIGN NAME',
    'CAMPAIGN NAME',
    'CAMPAIGN NAME',
    'CAMPAIGN NAME',
    'CAMPAIGN NAME',
    'CAMPAIGN NAME'
  ];
  return (
    <div className="flex flex-col relative">
      <DropDownButton
        isRevertIcon={false}
        className="!bg-[#1c2127] !justify-between px-[5px]
            h-[40px]
            "
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      >
        {campaignNames[currentIndex]}
      </DropDownButton>
      <div
        className={`${
          isVisible ? '' : 'hidden'
        } rounded-[10px] z-[45] absolute top-[100%] mt-[5px] bg-[#2c3137] w-full`}
      >
        <ScrollableComponent className={` max-h-[40vh]`}>
          {campaignNames.length > 0
            ? campaignNames.map((r: any, i: number) => (
                <button
                  key={i}
                  onClick={() => {
                    setCurrentIndex(i);
                    setIsVisible(false);
                  }}
                  className="h-[35px] hover:bg-[#171c22] border-[1px] rounded-[10px] border-[#171c22] w-full flex items-center justify-center"
                >
                  {r}
                </button>
              ))
            : ''}
        </ScrollableComponent>
      </div>
    </div>
  );
};

export default CampaignSelection;
