import Icon from '../../../shared/Icon';

const CheckBox = ({ isChecked, handleCheckboxChange, className = '' }) => {
  return (
    <>
      <input
        type="checkbox"
        id="myCheckbox"
        checked={isChecked}
        className="hidden"
        onChange={handleCheckboxChange}
      />
      <label htmlFor="myCheckbox">
        {isChecked ? (
          <Icon name="checked" className={className || ''} raw color="#f8bf60" size={20} />
        ) : (
          <Icon name="uncheck" className={className || ''} raw color="#f8bf60" size={20} />
        )}
      </label>
    </>
  );
};

export default CheckBox;
