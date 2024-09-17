import NumberProcess from '../../NumberProcess';

const CampaignInfoBox = ({ title, value }) => {
  return (
    <div
      className="flex flex-col flex-1
        rounded-[3px]
        lg:text-[8px] xl:text-[10px] md:text-[6px] text-[6px]
        py-[6px] px-[3px]
        bg-[#1c2127]
        items-center justify-center"
    >
      <div className="flex justify-center items-center text-center text-[#f8bf60]">{title}</div>
      <div className="flex justify-center items-center text-white">
        <NumberProcess number={value} />
      </div>
    </div>
  );
};

export default CampaignInfoBox;
