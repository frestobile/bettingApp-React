import Button from '../../../shared/Button';
import Icon from '../../../shared/Icon';
import DividerDiv from '../../DividerDiv';
import DropDownButton from '../../UserStatsPage/DropDownButton';
import GameInfoTable from '../GameInfoTable';

const DetailedGameInfo = ({ isDropped, setIsDropped, isExpanded, setIsExpanded }) => {
  const headers = [
    'ROUND',
    'PLAYER',
    'BET',
    'RESULT',
    'PAYOUT',
    'WIN',
    <Icon name="link" color="black" size={12} />
  ];
  const list = [
    [7777, 'tryo3750', 777777.77, 50, 7.5, 375000, 'BET #75,405'],
    [7777, 'tryo3750', 777777.77, 50, 7.5, 375000, 'BET #75,405'],
    [7777, 'tryo3750', 777777.77, 50, 7.5, 375000, 'BET #75,405'],
    [7777, 'tryo3750', 777777.77, 50, 7.5, 375000, 'BET #75,405'],
    [7777, 'tryo3750', 777777.77, 50, 7.5, 375000, 'BET #75,405'],
    [7777, 'tryo3750', 777777.77, 50, 7.5, 375000, 'BET #75,405'],
    [7777, 'tryo3750', 777777.77, 50, 7.5, 375000, 'BET #75,405'],
    [7777, 'tryo3750', 777777.77, 50, 7.5, 375000, 'BET #75,405'],
    [7777, 'tryo3750', 777777.77, 50, 7.5, 375000, 'BET #75,405'],
    [7777, 'tryo3750', 777777.77, 50, 7.5, 375000, 'BET #75,405'],
    [7777, 'tryo3750', 777777.77, 50, 7.5, 375000, 'BET #75,405'],
    [7777, 'tryo3750', 777777.77, 50, 7.5, 375000, 'BET #75,405'],
    [7777, 'tryo3750', 777777.77, 50, 7.5, 375000, 'BET #75,405'],
    [7777, 'tryo3750', 777777.77, 50, 7.5, 375000, 'BET #75,405'],
    [7777, 'tryo3750', 777777.77, 50, 7.5, 375000, 'BET #75,405'],
    [7777, 'tryo3750', 777777.77, 50, 7.5, 375000, 'BET #75,405'],
    [7777, 'tryo3750', 777777.77, 50, 7.5, 375000, 'BET #75,405']
  ];
  return (
    <div
      className="flex flex-col mx-[10px]
    md:gap-[10px] gap-[5px]"
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
                console.log('Previous Game');
              }}
            >
              Previous Game
            </Button>
            <Button
              className="bg-[#1c2127] flex-auto
          rounded-r-[5px]"
              onClick={() => {
                console.log('Next Game');
              }}
            >
              Next Game
            </Button>
          </div>
          <DividerDiv className="!bg-[#1c2127]" />
          <GameInfoTable
            headers={headers}
            list={list}
            isExpanded={isExpanded}
            setIsExpanded={setIsExpanded}
          />
          <DividerDiv className="!bg-[#1c2127]" />
          <div className="text-white text-center break-all">
            GAME HASH: 3fc58b69428e4d586f2f7fca3e7277de49d321c1227096c03a690a9440407755
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default DetailedGameInfo;
