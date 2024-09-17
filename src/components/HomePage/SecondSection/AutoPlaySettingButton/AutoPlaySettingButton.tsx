import Icon from '../../../../shared/Icon';

const AutoPlaySettingButton = ({ text, isLimit, selectedAmount, setSelectedAmount }) => {
  return (
    <button
      type="button"
      className={`bg-white w-full justify-center flex items-center
            xl:text-[8px] lg:text-[6.4px] md:text-[4.8px]
            rounded-[4px]
            py-[8px] ${selectedAmount === text ? '!bg-[#1c2127] text-white' : ''}`}
      onClick={() => {
        setSelectedAmount(text);
      }}
    >
      {text === 0 ? (
        <Icon raw name="infinite" size={11} />
      ) : text === null ? (
        'CUSTOM'
      ) : isLimit ? (
        `x${text} BET`
      ) : (
        text
      )}
    </button>
  );
};

export default AutoPlaySettingButton;
