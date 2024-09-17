import Button from '../../shared/Button';

const TabItemButton = ({
  title,
  tab,
  setTab,
  index,
  isFirst = false,
  isLast = false,
  className = ''
}) => {
  return (
    <Button
      onClick={() => {
        setTab(index);
      }}
      className={`flex-1
    xl:text-[14px] lg:text-[10.8px] md:text-[8.4px]
    ${isFirst ? 'rounded-l-[5px]' : ''}
    ${isLast ? 'rounded-r-[5px]' : ''}
    ${tab === index ? '!bg-[#f8bf60] text-black' : '!bg-[#1c2127]'}
    ${className || ''}`}
    >
      {title}
    </Button>
  );
};

export default TabItemButton;
