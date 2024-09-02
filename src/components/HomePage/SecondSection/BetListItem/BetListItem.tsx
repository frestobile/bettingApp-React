const BetListItem = ({ className, dValue, xValue, xValue2 }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center
        bg-[#1c2127] p-[3px] ${className || ''}`}
    >
      <div className="flex justify-center">
        <span className="text-[#f8bf60] mr-[3px]">$</span>
        {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
          .format(dValue)
          .replace('$', '')}
      </div>
      <div className="flex justify-center items-center gap-[3px]">
        <span className="text-[#f8bf60] mr-[3px]">x</span>
        {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
          .format(xValue)
          .replace('$', '')}
        <span>|</span>
        <span className="text-[#f8bf60] mr-[3px]">
          x{' '}
          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
            .format(xValue2)
            .replace('$', '')}
        </span>
      </div>
    </div>
  );
};

export default BetListItem;
