import Icon from '../../../../shared/Icon';

const DropDownButtonRevert = ({ children, isVisible, setIsVisible, className = '' }) => {
  return (
    <button
      type="button"
      className={`bg-white
                    xl:px-[8px] lg:px-[6.4px] md:px-[4.8px] py-[5px]
                    flex flex-row items-center
                    rounded-[5px]
                    ${className || ''}
                    ${isVisible ? '!bg-black text-white' : ''}`}
      onClick={() => {
        setIsVisible(!isVisible);
      }}
    >
      {children}
      {isVisible ? <Icon name="angleDown" size={10} raw /> : <Icon name="angleUp" size={10} raw />}
    </button>
  );
};

export default DropDownButtonRevert;
