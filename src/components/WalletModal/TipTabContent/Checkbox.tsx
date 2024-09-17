const CheckBox = ({ className = '', isLeft, setIsLeft }) => {
  return (
    <div
      onClick={() => {
        setIsLeft(!isLeft);
      }}
      className={`flex flex-row items-center
    cursor-pointer
    rounded-[20px] w-[45px] py-[5px]
    h-[26px]
    relative bg-[#f8bf60]
    ${className || ''}`}
    >
      <div
        className={`bg-[#1c2127]
      h-[20px] w-[20px] rounded-full
      absolute
      ${isLeft ? 'left-[5px]' : 'right-[5px]'}`}
      />
    </div>
  );
};

export default CheckBox;
