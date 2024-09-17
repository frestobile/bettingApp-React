import Button from '../../../shared/Button';
import Icon from '../../../shared/Icon';

const ShortGameInfo = () => {
  return (
    <div className=" m-[20px] md:px-[25%] px-[8%] pt-[15px] flex flex-col md:gap-[10px] gap-[5px]">
      <div className="text-[#f8bf60] flex justify-center items-center">
        Russian Roulette - Group | #5,939.096{' '}
        <Icon name="copy" className="ml-[5px]" raw size={10} />
      </div>
      <div className="text-[#f8bf60] text-center flex flex-col">
        Saturday 24 November 2025 at 17:02:52
        <div className="text-[white] text-center">18 Hours Ago</div>
      </div>
      <div
        className="bg-[#1c2127]
    my-[5px] md:py-[20px] py-[10px]
     rounded-[5px]
    text-[#f8bf60] flex flex-col justify-center items-center
    xl:text-[20px] lg:text-[16px] md-[12px]"
      >
        <span
          className="text-white
      "
        >
          Result
        </span>
        <span className="text-[#f8bf60]">750.00x</span>
      </div>
      <Button
        className="bg-[#f8bf60] text-black
    rounded-[4px]
    xl:text-[18px] lg:text-[14.4px] md-[10.8px]
    h-[40px]"
      >
        PLAY RUSSIAN ROULETTE
      </Button>
    </div>
  );
};

export default ShortGameInfo;
