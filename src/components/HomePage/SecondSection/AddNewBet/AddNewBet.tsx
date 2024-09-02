import BetStatusBar from '../BetStatusBar';
import NewBetItem from '../NewBetItem';

const AddNewBet = () => {
  return (
    <div
      className="flex flex-col xl:gap-[15px] lg:gap-[12px] md:gap-[10px] gap-[6px]
      xl:px-[15px] lg:px-[12px] md:px-[9px] px-[6px]"
    >
      <div
        className="text-white
            flex flex-row justify-center items-center w-full rounded-[5px]"
      >
        Add New Bet
      </div>
      <NewBetItem value={0.1} type="$">
        Bet
      </NewBetItem>
      <BetStatusBar />
      <NewBetItem value={0.1} type="$">
        Payout(<span className="text-[#f8bf60]">Bounus</span>)
      </NewBetItem>
      <BetStatusBar />
      <NewBetItem value={0.1} type="$">
        Payout(Base)
      </NewBetItem>
      <BetStatusBar />
    </div>
  );
};

export default AddNewBet;
