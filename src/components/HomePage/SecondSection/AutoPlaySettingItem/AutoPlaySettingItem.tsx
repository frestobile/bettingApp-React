import AutoPlaySettingButton from '../AutoPlaySettingButton';

const AutoPlaySettingItem = ({
  girdCols,
  title,
  lists,
  selectedAmount,
  setSelectedAmount,
  isLimit = false
}) => {
  return (
    <>
      <span className="md:text-[6px] text-[8px] lg:text-[10px]">{title}</span>
      <div className={`grid ${girdCols} gap-[5px]`}>
        {lists.map((r) => (
          <AutoPlaySettingButton
            key={r}
            text={r}
            isLimit={isLimit}
            selectedAmount={selectedAmount}
            setSelectedAmount={setSelectedAmount}
          />
        ))}
      </div>
    </>
  );
};

export default AutoPlaySettingItem;
