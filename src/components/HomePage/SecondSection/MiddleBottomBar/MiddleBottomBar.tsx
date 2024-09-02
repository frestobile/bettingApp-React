import BetActionPart from './BetActionPart';
import PayoutActionPart from './PayoutActionPart';
import PlayActionPart from './PlayActionPart';

const MiddleBottomBar = () => {
  return (
    <div className="md:grid flex flex-col md:grid-cols-10 gap-[5px] md:h-[100px]">
      <BetActionPart />
      <PlayActionPart />
      <PayoutActionPart />
    </div>
  );
};

export default MiddleBottomBar;
