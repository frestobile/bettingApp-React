const AmmoItem = ({ isFull = false }) => {
  return (
    <div
      className={`rounded-t-[6px] w-[10px] h-full ${isFull ? 'bg-[#F8BF60]' : 'bg-[#1C2127]'}`}
    />
  );
};

export default AmmoItem;
