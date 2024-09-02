import Icon from '../../../../shared/Icon';
import ShadowButton from '../../../../shared/ShadowButton';
import XPBar from '../../../../shared/XPBar';

const PayoutActionPart = () => {
  return (
    <div
      className="bg-[#2c3137] md:order-3 order-2 md:col-span-3 flex flex-col gap-[5px] px-[3px] py-[10px]
    xl:text-[8px] lg:text-[6.4px] md:text-[4.8px] text-[10px]"
    >
      <div className="flex flex-row gap-[3px]">
        <ShadowButton
          className="basis-1/2 md:h-[14px] text-[black] leading-none flex justify-center items-center
        hover:mix-blend-difference shadow-[0px_4px_0px_0px_rgba(153,122,73,1)]
        w-[100%] bg-[#f8bf60] rounded-l-[5px]
        py-[3px] md:py-0"
        >
          BASE
        </ShadowButton>
        <ShadowButton
          className="basis-1/2 md:h-[14px] text-[white] leading-none
          py-[3px] md:py-0
        hover:bg-[#21262c] hover:shadow-[0px_4px_0px_0px_rgba(29,32,34,1)] flex justify-center items-center shadow-[0px_4px_0px_0px_rgba(33,38,44,1)] w-[100%] bg-[#1c2127] rounded-r-[5px]"
        >
          BONUS
        </ShadowButton>
      </div>

      <div className="flex flex-row text-white h-[34px] gap-[1px] mt-[4px]">
        <div
          className="bg-[#1c2127] flex-auto flex lg:flex-row md:flex-col flex-row items-center justify-between
          rounded-l-[5px] relative gap-[1px] px-[2px]
          text-[9px] xl:text-[9px] lg:text-[7.2px] md:text-[5.4px]"
        >
          <button
            className="flex flex-row items-center gap-[2px]
            flex-none w-fit"
          >
            Payout
            <Icon name="sortArrowDown" color="white" size={6} raw />
          </button>
          <span
            className="truncate text-center px-[2px]
          md:max-w-[25px] lg:max-w-[20px] xl:max-w-[50px]"
          >
            {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
              .format(777777)
              .replace('$', '')}
          </span>
          <span className="text-[#f8bf60] flex-none w-fit">x</span>
        </div>
        <div
          className="bg-[#1c2127]
        xl:w-[35px] lg:w-[28px] md:w-[21px]
        flex-none w-[35px] flex items-center justify-center"
        >
          1/2
        </div>
        <div
          className="bg-[#1c2127]
        xl:w-[35px] lg:w-[28px] md:w-[21px]
        flex-none w-[35px] flex items-center justify-center rounded-r-[5px]"
        >
          x2
        </div>
      </div>
      <div className="flex flex-row items-center gap-[1px] text-white h-[18px] rounded-[5px]">
        <XPBar
          color="#f8bf60"
          className="rounded-0"
          containterClass="!skew-x-0 !h-[3px]"
          shadowClass="!top-[3px]"
        />
        <XPBar
          color="#f8bf60"
          className="rounded-0"
          containterClass="!skew-x-0 !w-[20px] !flex-none !h-[9px]"
        />
        <XPBar
          className="rounded-0"
          containterClass="!skew-x-0  !h-[3px]"
          shadowClass="!top-[3px]"
        />
      </div>
    </div>
  );
};

export default PayoutActionPart;
