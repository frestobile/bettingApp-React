import { useState } from 'react';
import ScrollableComponent from '../../../shared/ScrollbarComponent';
import DropDownButton from '../../UserStatsPage/DropDownButton';

const CoinSelection = ({ classNames = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const coins = ['BTC'];
  return (
    <div className="flex flex-col relative">
      <DropDownButton
        isRevertIcon={false}
        className={`gap-[2px]
        rounded-[5px]
        h-[48px] ${classNames || ''}`}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      >
        {coins[currentIndex]}
      </DropDownButton>
      <div
        className={`${
          isVisible ? '' : 'hidden'
        } rounded-[10px] z-[45] absolute top-[100%] mt-[5px] bg-[#2c3137] w-full`}
      >
        <ScrollableComponent className={` max-h-[40vh]`}>
          {coins.length > 0
            ? coins.map((r: any, i: number) => (
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

export default CoinSelection;
