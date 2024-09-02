// import { useMediaQuery } from 'usehooks-ts';
import { FC, useState } from 'react';
import BetImg from '../../assets/images/bet.svg';
import LogoImg from '../../assets/images/logo.svg';
import Icon from '../../shared/Icon';
import HeaderWallet from './HeaderWallet';
import LevelBar from './LevelBar';
import CurrentXpBar from './CurrentXpBar';
import { Link } from 'react-router-dom';

interface IHeaderProp {
  toggleChatSection: (e: any) => void;
  isOpen: boolean;
}

const Header: FC<IHeaderProp> = ({ toggleChatSection, isOpen }) => {
  // const isXl = useMediaQuery('(max-width: 1240px)');
  const [isClicked, setIsClicked] = useState(false);
  const [level] = useState(74);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cryptoList] = useState([
    1000000, 23422323, 23242123, 343534, 12323242, 32323242, 22323242, 23253242, 23233242, 23423242
  ]);
  return (
    <div
      className="w-full flex flex-col
    xl:text-[14px] lg:text-[11.2px] md:text-[8.4px] text-[8px]"
    >
      <div
        className="w-full z-[1]
      h-[60px] 
      bg-[#1c2127] flex flex-row
      shadow-[0px_0px_8px_0px_rgba(0,0,0,0.25)]"
      >
        <div className="flex-1 flex pl-[15px] items-center">
          <img
            src={LogoImg}
            alt="logo"
            className="xl:h-[46px] lg:h-[36.8px] md:h-[27.6px] cursor-pointer md:flex hidden"
          />
          <img src={BetImg} alt="logo" className="h-[25px] cursor-pointer md:hidden flex" />
        </div>
        <div className="flex-2 flex items-center justify-center text-white">
          <HeaderWallet
            cryptoList={cryptoList}
            isClicked={isClicked}
            setCurrentIndex={setCurrentIndex}
            setIsClicked={setIsClicked}
            currentIndex={currentIndex}
          />
        </div>
        <div className="flex-1 flex flex-row gap-[5px] justify-end pr-[7px] items-center">
          <Link to="/sign">
            <Icon
              name="user"
              className="text-white
            xl:h-[20px] lg:h-[16px] md:h-[16px]
            xl:w-[20px] lg:w-[16px] md:w-[16px]"
              raw
            />
          </Link>
          {!isOpen && (
            <Icon
              color="white"
              name="arrowLeft"
              size={16}
              className="text-white "
              onClick={() => {
                toggleChatSection(!isOpen);
              }}
            />
          )}
        </div>
      </div>
      <div className="flex flex-col justify-center bg-[#1c2127] h-[75px] pt-[11px]">
        <LevelBar level={level} />
        <CurrentXpBar />
      </div>
    </div>
  );
};

export default Header;
