import Button from '../../../shared/Button';
import Icon from '../../../shared/Icon';
import DividerDiv from '../../DividerDiv';
import DropDownButton from '../../UserStatsPage/DropDownButton';
import BetInfoTable from '../BetInfoTable';

const DetailedGameInfo = ({ isDropped, setIsDropped, isExpanded, setIsExpanded }) => {
  const headers = [
    'ROUND',
    'BET',
    'RESULT',
    'TARGET',
    'WON',
    'PAYOUT',
    <Icon name="link" color="black" size={12} />
  ];
  const list = [
    [1, 777777.77, 200, 75, 777777.77, 777777.77, 'BET #7777777'],
    [2, 100, 10, 20, 200, 777777.77, 'BET #7777777'],
    [1, 777777.77, 200, 75, 777777.77, 777777.77, 'BET #7777777'],
    [2, 100, 10, 20, 200, 777777.77, 'BET #7777777'],
    [1, 777777.77, 200, 75, 777777.77, 777777.77, 'BET #7777777'],
    [2, 100, 10, 20, 200, 777777.77, 'BET #7777777'],
    [1, 777777.77, 200, 75, 777777.77, 777777.77, 'BET #7777777'],
    [2, 100, 10, 20, 200, 777777.77, 'BET #7777777'],
    [1, 777777.77, 200, 75, 777777.77, 777777.77, 'BET #7777777'],
    [2, 100, 10, 20, 200, 777777.77, 'BET #7777777'],
    [1, 777777.77, 200, 75, 777777.77, 777777.77, 'BET #7777777'],
    [2, 100, 10, 20, 200, 777777.77, 'BET #7777777'],
    [1, 777777.77, 200, 75, 777777.77, 777777.77, 'BET #7777777'],
    [2, 100, 10, 20, 200, 777777.77, 'BET #7777777'],
    [1, 777777.77, 200, 75, 777777.77, 777777.77, 'BET #7777777'],
    [2, 100, 10, 20, 200, 777777.77, 'BET #7777777']
  ];
  return (
    <div
      className="flex flex-col mx-[10px]
    gap-[10px]"
    >
      <DropDownButton
        isVisible={isDropped}
        isRevertIcon={false}
        setIsVisible={setIsDropped}
        className="!bg-transparent
        !justify-center gap-x-[4px]"
      >
        {isDropped ? 'Less Details' : 'More Details'}
      </DropDownButton>
      {isDropped ? (
        <>
          <DividerDiv className="!bg-[#1c2127]" />
          <div className="h-[35px] flex flex-row gap-x-[7px]">
            <Button
              className="!bg-[#1c2127] flex-auto
          rounded-l-[5px]"
              onClick={() => {
                console.log('Previous Bet');
              }}
            >
              Previous Bet
            </Button>
            <Button
              className="bg-[#1c2127] flex-auto
          rounded-r-[5px]"
              onClick={() => {
                console.log('Next Bet');
              }}
            >
              Next Bet
            </Button>
          </div>
          <DividerDiv className="!bg-[#1c2127]" />
          <div className="text-[#f8bf60] text-[Montserrat-semi] text-center flex flex-row gap-1">
            gvjt640's
            <div className="text-[white] text-center">Round Results:</div>
          </div>
          <BetInfoTable
            headers={headers}
            list={list}
            isExpanded={isExpanded}
            setIsExpanded={setIsExpanded}
          />
          <DividerDiv className="!bg-[#1c2127]" />
          <div
            className="text-white flex flex-row gap-[3px]
          items-center justify-center"
          >
            <span className="w-fit break-keep whitespace-nowrap flex gap-[2px]">
              GAME HASH <Icon color="white" name="qeustionCircle" raw size={12} />:
            </span>
            <span className="break-all text-center">
              3fc58b69428e4d586f2f7fca3e7277de49d321c1227096c03a690a9440407755
            </span>
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default DetailedGameInfo;
