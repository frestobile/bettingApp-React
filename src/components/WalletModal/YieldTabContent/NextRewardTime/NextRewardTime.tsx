const NextRewardTime = () => {
  return (
    <div
      className="flex flex-row gap-[3px]
    xl:text-[16px] lg:text-[12.8px] md:text-[9.6px]
    justify-center items-center"
    >
      2<span className="text-[#f8bf60]">Hours,</span>
      25
      <span className="text-[#f8bf60]">Minutes,</span>
      10
      <span className="text-[#f8bf60]">Seconds</span>
      <span>to Next Reward</span>
    </div>
  );
};

export default NextRewardTime;
