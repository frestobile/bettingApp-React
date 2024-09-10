import Icon from '../../../shared/Icon';

const DropDownButton = ({
  children,
  isVisible,
  setIsVisible,
  className = '',
  isRevertIcon = true
}) => {
  return (
    <button
      type="button"
      className={`bg-white
                    xl:px-[8px] lg:px-[6.4px] md:px-[4.8px] py-[5px]
                    flex flex-row items-center justify-around
                    rounded-[3px]
                    ${className || ''}`}
      onClick={(e) => {
        e.stopPropagation();
        setIsVisible(!isVisible);
      }}
    >
      {children}
      {!isRevertIcon ? (
        <Icon name={isVisible ? 'sortArrowUp' : 'sortArrowDown'} size={10} raw />
      ) : (
        <Icon name={isVisible ? 'sortArrowDown' : 'sortArrowUp'} size={10} raw />
      )}
    </button>
  );
};

export default DropDownButton;
