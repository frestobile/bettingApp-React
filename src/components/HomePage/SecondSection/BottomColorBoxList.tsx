import ColorBoxSmall from './ColorBoxSmall';

const BottomColorBoxList = () => {
  return (
    <div className="bg-[#2c3137] w-full px-[10px] py-[6px] grid grid-cols-10 gap-[2px] h-[38px]">
      <ColorBoxSmall isBonus={false} text={'x' + 2.75} color="white" />
      <ColorBoxSmall isBonus={false} text={'x' + 8.42} color="#298854" />
      <ColorBoxSmall isBonus={false} text={'x' + 5.76} color="#298854" />
      <ColorBoxSmall isBonus={false} text={'x' + 9.77} color="white" />
      <ColorBoxSmall isBonus={false} text={'x' + 3.25} color="white" />
      <ColorBoxSmall isBonus={false} text={'x' + 4.98} color="white" />
      <ColorBoxSmall isBonus={false} text={'x' + 25.25} color="#2cabd9" />
      <ColorBoxSmall isBonus={false} text={'x' + 1.71} color="white" />
      <ColorBoxSmall isBonus={false} text={'x' + 2.62} color="white" />
      <ColorBoxSmall isBonus={true} text={'x' + 500.25} color="#f8bf60" />
    </div>
  );
};

export default BottomColorBoxList;
