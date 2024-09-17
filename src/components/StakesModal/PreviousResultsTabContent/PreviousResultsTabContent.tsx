import Icon from '../../../shared/Icon';
import NumberProcess from '../../NumberProcess';
import PreviousResultsTable from '../PreviousResultsTable';

const PreviousResultsTabContent = () => {
  const headers = ['POOL', 'STAKE', 'REWARD', 'CHANCE', 'MULTIPLIER', 'RESULT', 'LINK'];
  const list = [
    [
      'STAKE',
      <span className="flex items-center gap-[2px]">
        <Icon name="diamondIcon" color="#f8bf60" size={10} />
        <NumberProcess number={100} />
        <Icon name="dice" color="#f8bf60" size={10} />
      </span>,
      <span className="flex items-center gap-[2px]">
        <Icon name="diamondIcon" color="#f8bf60" size={10} />
        <NumberProcess number={20000} />
      </span>,
      <span className="flex items-center gap-[2px]">
        <NumberProcess number={0.5} />
        <span className="text-[#f8bf60]">%</span>
      </span>,
      <span className="flex items-center gap-[2px]">
        <span className="text-[#f8bf60] mr-[3px]">x</span>
        <NumberProcess number={200} />
      </span>,
      <span className="flex items-center gap-[2px]">
        <span className="text-[#f8bf60] mr-[3px]">x</span>
        <NumberProcess number={28.42} />
      </span>,
      <span className="text-[#f8bf60]">STAKE #777,777</span>
    ],

    [
      <span className="text-[#f8bf60]">WAGER</span>,
      <span className="text-[#f8bf60] flex items-center gap-[2px]">
        <Icon name="diamondIcon" color="#f8bf60" size={10} />
        <NumberProcess number={100} />
      </span>,
      <span className="text-[#f8bf60] flex items-center gap-[2px]">
        <Icon name="diamondIcon" color="#f8bf60" size={10} />
        <NumberProcess number={20000} />
      </span>,
      <span className="text-[#f8bf60] flex items-center gap-[2px]">
        <NumberProcess number={0.5} />
        <span className="text-[#f8bf60]">%</span>
      </span>,
      <span className="text-[#f8bf60] flex items-center gap-[2px]">
        <span className="text-[#f8bf60] mr-[3px]">x</span>
        <NumberProcess number={200} />
      </span>,
      <span className="text-[#f8bf60] flex items-center gap-[2px]">
        <span className="text-[#f8bf60] mr-[3px]">x</span>
        <NumberProcess number={792.82} />
      </span>,
      <span className="text-[#f8bf60]">WAGER #777,777</span>
    ],

    [
      <span className="text-[#f8bf60]">AFILLIATE</span>,
      <span className="text-[#f8bf60] flex items-center gap-[2px]">
        <Icon name="diamondIcon" color="#f8bf60" size={10} />
        <NumberProcess number={100} /> (77.77%)
      </span>,
      <span className="text-[#f8bf60] flex items-center gap-[2px]">
        <Icon name="diamondIcon" color="#f8bf60" size={10} />
        <NumberProcess number={20000} />
      </span>,
      <span className="text-[#f8bf60] flex items-center gap-[2px]">
        <NumberProcess number={0.5} />
        <span className="text-[#f8bf60]">%</span>
      </span>,
      <span className="text-[#f8bf60] flex items-center gap-[2px]">
        <span className="text-[#f8bf60] mr-[3px]">x</span>
        <NumberProcess number={200} />
      </span>,
      <span className="text-[#f8bf60] flex items-center gap-[2px]">
        <span className="text-[#f8bf60] mr-[3px]">x</span>
        <NumberProcess number={19250.72} />
      </span>,
      <span className="text-[#f8bf60]">WAGER #777,777</span>
    ],

    [
      'STAKE',
      <span className="flex items-center gap-[2px]">
        <Icon name="diamondIcon" color="#f8bf60" size={10} />
        <NumberProcess number={100} />
      </span>,
      <span className="flex items-center gap-[2px]">
        <Icon name="diamondIcon" color="#f8bf60" size={10} />
        <NumberProcess number={20000} />
      </span>,
      <span className="flex items-center gap-[2px]">
        <NumberProcess number={0.5} />
        <span className="text-[#f8bf60]">%</span>
      </span>,
      <span className="flex items-center gap-[2px]">
        <span className="text-[#f8bf60] mr-[3px]">x</span>
        <NumberProcess number={200} />
      </span>,
      <span className="flex items-center gap-[2px]">
        <span className="text-[#f8bf60] mr-[3px]">x</span>
        <NumberProcess number={85.48} />
      </span>,
      <span className="text-[#f8bf60]">STAKE #777,777</span>
    ],
    [
      'WAGER',
      <span className="flex items-center gap-[2px]">
        <Icon name="diamondIcon" color="#f8bf60" size={10} />
        <NumberProcess number={100} />
      </span>,
      <span className="flex items-center gap-[2px]">
        <Icon name="diamondIcon" color="#f8bf60" size={10} />
        <NumberProcess number={20000} />
      </span>,
      <span className="flex items-center gap-[2px]">
        <NumberProcess number={0.5} />
        <span className="text-[#f8bf60]">%</span>
      </span>,
      <span className="flex items-center gap-[2px]">
        <span className="text-[#f8bf60] mr-[3px]">x</span>
        <NumberProcess number={200} />
      </span>,
      <span className="text-[#f8bf60] flex items-center gap-[2px]">
        <span className="text-[#f8bf60] mr-[3px]">x</span>
        <NumberProcess number={792.82} />
      </span>,
      <span className="text-[#f8bf60]">WAGER #777,777</span>
    ],

    [
      'AFILLIATE',
      <span className="flex items-center gap-[2px]">
        <Icon name="diamondIcon" color="#f8bf60" size={10} />
        <NumberProcess number={100} /> (77.77%)
      </span>,
      <span className="text-[#f8bf60] flex items-center gap-[2px]">
        <Icon name="diamondIcon" color="#f8bf60" size={10} />
        <NumberProcess number={20000} />
      </span>,
      <span className="text-[#f8bf60] flex items-center gap-[2px]">
        <NumberProcess number={0.5} />
        <span className="text-[#f8bf60]">%</span>
      </span>,
      <span className="text-[#f8bf60] flex items-center gap-[2px]">
        <span className="text-[#f8bf60] mr-[3px]">x</span>
        <NumberProcess number={200} />
      </span>,
      <span className="text-[#f8bf60] flex items-center gap-[2px]">
        <span className="text-[#f8bf60] mr-[3px]">x</span>
        <NumberProcess number={19250.72} />
      </span>,
      <span className="text-[#f8bf60]">WAGER #777,777</span>
    ]
  ];
  return (
    <div className="flex flex-col gap-[10px] mx-[15px]">
      <div>Preivous Results</div>
      <PreviousResultsTable headers={headers} list={list} />
    </div>
  );
};

export default PreviousResultsTabContent;
