import Button from '../../../../shared/Button';
import Icon from '../../../../shared/Icon';
import DividerDiv from '../../../DividerDiv';
import NextRewardTime from '../NextRewardTime';
import WagerResults from '../WagerSubTabContent/WagerResults';
import YieldInfo from '../YieldInfo';

const AffiliateSubTabContent = () => {
  return (
    <>
      <NextRewardTime />
      <DividerDiv className="!bg-[#1c2127]" />
      <YieldInfo />
      <DividerDiv className="!bg-[#1c2127]" />
      <Button
        className="bg-[#f8bf60] text-black
      flex items-center
      px-[10px] my-[5px]
      rounded-[5px]
      h-[36px] !justify-between w-full"
      >
        Your Stakes
        <Icon name="openInNew" size={14} />
      </Button>
      <DividerDiv className="!bg-[#1c2127]" />
      <WagerResults type="Affiliate" />
    </>
  );
};

export default AffiliateSubTabContent;
