import { useState } from 'react';
import ScrollableComponent from '../../../shared/ScrollbarComponent';
import DropDownButton from '../../UserStatsPage/DropDownButton';
import Icon from '../../../shared/Icon';
import NumberProcess from '../../NumberProcess';

const WalletSelection = ({ type = 'bitcoin' }: { type: 'bitcoin' | 'diamondIcon' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const wallets = [103262];
  return (
    <div className="flex flex-col relative">
      <DropDownButton
        isRevertIcon={false}
        className="!bg-[#1c2127] !px-[10px] !justify-between gap-[2px]
          rounded-[5px]
          h-[48px]"
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      >
        <Icon name={type} size={12} color="#f8bf60" raw />
        <NumberProcess number={wallets[currentIndex]} shouldRemoveFloat={false} />
      </DropDownButton>
      <div
        className={`${
          isVisible ? '' : 'hidden'
        } rounded-[10px] z-[45] absolute top-[100%] mt-[5px] bg-[#2c3137] w-full`}
      >
        <ScrollableComponent className={` max-h-[40vh]`}>
          {wallets.length > 0
            ? wallets.map((r: any, i: number) => (
                <button
                  key={i}
                  onClick={() => {
                    setCurrentIndex(i);
                    setIsVisible(false);
                  }}
                  className="h-[35px] hover:bg-[#171c22] border-[1px]
                  rounded-[10px] border-[#171c22] w-full flex items-center justify-center"
                >
                  <Icon name="bitcoin" size={12} color="#f8bf60" raw /> {r}
                </button>
              ))
            : ''}
        </ScrollableComponent>
      </div>
    </div>
  );
};

export default WalletSelection;
