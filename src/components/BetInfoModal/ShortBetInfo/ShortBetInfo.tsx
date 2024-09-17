import Button from '../../../shared/Button';
import Icon from '../../../shared/Icon';

const ShortBetInfo = () => {
  return (
    <div className=" m-[20px] pt-[15px] flex flex-col gap-[10px]">
      <div className="text-[#f8bf60] flex justify-center items-center">
        Russian Roulette - Group | #5829,525
        <Icon name="copy" className="ml-[5px]" raw size={10} />
      </div>
      <div className="text-[#f8bf60] gap-[3px] items-center justify-center flex flex-row">
        <div className="text-[white] text-center">Username: </div>gvjt6400
      </div>
      <div className="text-[#f8bf60] text-center flex flex-col">
        Saturday 24 November 2025 at 17:02:52 GMT
        <div className="text-[white] text-center">18 Hours Ago</div>
      </div>
      <div
        className="mx-[10%]
          my-[5px]
          gap-x-[1px]
          text-[#f8bf60] flex flex-row justify-center items-center
          xl:text-[20px] lg:text-[16px] md:text-[12px]"
      >
        <div
          className="bg-[#1c2127] flex-1 flex flex-col rounded-l-[5px]
        py-[20px] gap-[5px]"
        >
          <span className="text-white text-center">Bet</span>
          <span
            className="text-[#f8bf60] flex flex-row gap-[3px]
          items-center justify-center"
          >
            <Icon
              name="diamondIcon"
              className="xl:w-[16px] xl:h-[16px]
            lg:w-[12.8px] lg:h-[12.8px]
            md:w-[9.6px] md:h-[9.6px]"
              raw
            />{' '}
            50,000
          </span>
        </div>
        <div
          className="bg-[#1c2127] flex-1 justify-center flex flex-col
        py-[20px] gap-[5px]"
        >
          <span className="text-white text-center">Multiplier</span>
          <span className="text-[#f8bf60] text-center">750.00x</span>
        </div>
        <div
          className="bg-[#1c2127] flex-1 justify-center flex flex-col
        rounded-r-[5px]
        py-[20px] gap-[5px]"
        >
          <span className="text-white text-center">Payout</span>
          <span
            className="text-[#f8bf60] flex flex-row gap-[3px]
          items-center justify-center"
          >
            <Icon
              name="diamondIcon"
              className="xl:w-[16px] xl:h-[16px]
            lg:w-[12.8px] lg:h-[12.8px]
            md:w-[9.6px] md:h-[9.6px]"
              raw
            />{' '}
            750,000.00
          </span>
        </div>
      </div>
      <Button
        className="bg-[#f8bf60] text-black
          mx-[20%]
          rounded-[4px]
    xl:text-[18px] lg:text-[14.4px] md-[10.8px]
    h-[40px]"
      >
        PLAY RUSSIAN ROULETTE
      </Button>
    </div>
  );
};

export default ShortBetInfo;
