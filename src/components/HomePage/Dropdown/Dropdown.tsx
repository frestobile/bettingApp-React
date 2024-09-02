import Icon from '../../../shared/Icon';
import ShadowButton from '../../../shared/ShadowButton';

const Dropdown = ({
  containerClasses = '',
  isShadow = false,
  children,
  setIsVisible,
  isVisible,
  btnClasses = '',
  arrowClasses = ''
}) => {
  return (
    <div className={`${containerClasses || ''}`}>
      {isShadow ? (
        <ShadowButton
          onClick={() => {
            setIsVisible(!isVisible);
          }}
          className={`hover:mix-blend-exclusion
                    relative
                    gap-[5px] bg-[#2c3137] flex-row
                    flex justify-center items-center 
                    shadow-[0px_6px_0px_0px_rgba(23,28,34,1)] ${btnClasses || ''}`}
        >
          {children[0]}
          {isVisible ? (
            <Icon
              name="sortArrowUp"
              color="white"
              className={`absolute right-[20px] ${arrowClasses || ''}`}
              size={10}
              raw
            />
          ) : (
            <Icon
              name="sortArrowDown"
              color="white"
              className={`absolute right-[20px] ${arrowClasses || ''}`}
              size={10}
              raw
            />
          )}
        </ShadowButton>
      ) : (
        <button
          onClick={() => {
            setIsVisible(!isVisible);
          }}
          className={`bg-[#2c3137] 
          flex-row flex justify-center items-center 
          relative ${btnClasses || ''}`}
        >
          {children[0]}
          {isVisible ? (
            <Icon
              name="sortArrowUp"
              color="white"
              className={`absolute right-[20px] ${arrowClasses || ''}`}
              size={10}
              raw
            />
          ) : (
            <Icon
              name="sortArrowDown"
              color="white"
              className={`absolute right-[20px] ${arrowClasses || ''}`}
              size={10}
              raw
            />
          )}
        </button>
      )}

      {children[1]}
    </div>
  );
};

export default Dropdown;
