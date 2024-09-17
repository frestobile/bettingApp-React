import Icon from '../../../../shared/Icon';
import NumberProcess from '../../../NumberProcess';
import Resultitem from '../../GemsTabContent/Resultitem';

const WagerResults = ({ type = 'Wager' }) => {
  return (
    <>
      <Resultitem
        text={
          <span className="flex items-center gap-[3px]">
            Contribution Rate <Icon name="infoCircle" raw size={12} />
          </span>
        }
        value={<NumberProcess number={10} shouldRemoveFloat={false} />}
        unit="%"
      />
      <Resultitem
        text={
          <span className="flex items-center gap-[3px]">
            Your {type} Pool Balance <Icon name="infoCircle" raw size={12} />
          </span>
        }
        value={<NumberProcess number={50000} />}
        unit={<Icon name="diamondIcon" size={12} raw />}
      />
      <Resultitem
        text={<span className="flex items-center gap-[3px]">Average Reward Muitplier</span>}
        value={<NumberProcess number={1.35} shouldRemoveFloat={false} />}
        unit="x"
      />
      <Resultitem
        text={<span className="flex items-center gap-[3px]">Average Reward Chance</span>}
        value={<NumberProcess number={74.05} shouldRemoveFloat={false} />}
        unit="%"
      />
      <Resultitem
        text={<span className="flex items-center gap-[3px]">Average Reward Amount</span>}
        value={<NumberProcess number={537.75} shouldRemoveFloat={false} />}
        unit={<Icon name="diamondIcon" raw size={12} />}
      />
      <Resultitem
        text={<span className="flex items-center gap-[3px]">Average Reward Yield</span>}
        value={<NumberProcess number={1.15} shouldRemoveFloat={false} />}
        unit="%"
      />
      <Resultitem
        text={<span className="flex items-center gap-[3px]">Average ROI (5-Day Rate)</span>}
        value={<NumberProcess number={13.54} shouldRemoveFloat={false} />}
        unit="%"
      />
      <Resultitem
        text={<span className="flex items-center gap-[3px]">Max RoOI (5-Day Rate)</span>}
        value={<NumberProcess number={18.67} shouldRemoveFloat={false} />}
        unit="%"
      />
    </>
  );
};

export default WagerResults;
