import Button from '../../../../shared/Button';

const InfoButton = ({ btnClass = '', labelClass = '', label, value }) => {
  return (
    <Button
      className={`bg-[#1c2127] text-white
    relative
    flex items-center
    px-[10px] my-[5px]
    rounded-[5px]
    h-[48px] !justify-center w-full
    ${btnClass || ''}`}
    >
      <span className={`absolute left-[10px] ${labelClass || ''}`}>{label}</span>
      {value}
    </Button>
  );
};
export default InfoButton;
