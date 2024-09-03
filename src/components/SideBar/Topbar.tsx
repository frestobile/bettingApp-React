import Icon from '../../shared/Icon';
import DiagonalArrow from '../../assets/images/diagonal-arrow.svg';

const Topbar = ({ open, setOpen }) => {
  return (
    <div
      className="flex flex-row shadow-[0px_8px_8px_0px_rgba(0,0,0,0.25)] h-[60px]
    xl:text-[16px] lg:text-[12.8px] md:text-[9.6px] text-[10px]
    items-center text-white justify-around"
    >
      <Icon
        name="arrowRight"
        className="text-white"
        size={20}
        onClick={() => {
          setOpen(!open);
        }}
      />
      English Chat Room
      <button>
        <img
          className="ml-[10px] h-full w-[18px] justify-center flex right-[15px] items-center"
          src={DiagonalArrow}
          alt="DiagonalArrow"
        />
      </button>
    </div>
  );
};

export default Topbar;
