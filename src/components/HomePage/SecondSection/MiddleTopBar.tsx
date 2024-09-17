import Media from '../../../shared/Media';
import ColorBox from './ColorBox';
import LogoImg from '../../../assets/images/logo.svg';
import { useMain } from '../../../providers/MainProvider';
import { useEffect, useState } from 'react';
import ScrollableComponent from '../../../shared/ScrollbarComponent';
import AmmoItem from './AmmoItem';

const MiddleTopBar = () => {
  const { isPlaying, setIsPlaying } = useMain();
  const [animation, setAnimation] = useState('');
  const [ammoes, setAmmoes] = useState(0);
  useEffect(() => {
    if (isPlaying) {
      if (animation === '') {
        setAnimation(`scroll 300ms linear infinite`);
        setAmmoes(0);
        setTimeout(() => {
          setAnimation(`scrollDec 3000ms cubic-bezier(0, 0, 0.2, 1) 1`);
          setTimeout(() => {
            setAnimation('');
            setAmmoes(1);
            setTimeout(() => {
              setIsPlaying(false);
            }, 2000);
          }, 1000);
        }, 4500);
      } else {
        return;
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (ammoes > 0 && ammoes < 4) {
      setTimeout(() => {
        setAmmoes((prev) => prev + 1);
      }, 50);
    }
  }, [ammoes]);

  return (
    <div className="bg-[#2c3137] flex flex-row items-center md:h-[44px]">
      <Media
        type="image"
        link={LogoImg}
        className="h-auto !w-[80%] !static"
        containerClasses="flex-none h-full
        xl:w-[106px] lg:w-[84.8px] md:w-[63.6px] justify-center md:flex hidden
        items-center flex"
      />
      <div
        className="md:p-0 py-[5px] px-[10px] overflow-hidden
      xl:w-[calc(100%-212px)] md:w-[calc(100%-127.2px)] lg:w-[calc(100%-169.6px)] w-full"
      >
        <ScrollableComponent className="w-full overflow-hidden">
          <div
            className={`md:h-[44px] h-[25px] grid 
          ${animation ? 'grid-cols-10 w-[200%]' : 'grid-cols-5 w-full'} `}
          >
            <ColorBox animation={animation} isBonus={false} text={'x' + 200.25} color="#af60f8" />
            <ColorBox animation={animation} isBonus={false} text={'x' + 25.55} color="#2cabd9" />
            <ColorBox
              animation={animation}
              isBonus={true}
              width="70%"
              text={'x' + 2.75}
              color="#f8bf60"
            />
            <ColorBox animation={animation} isBonus={false} text={'x' + 7.25} color="white" />
            <ColorBox animation={animation} isBonus={false} text={'x' + 75.84} color="#298854" />
            {animation ? (
              <ColorBox animation={animation} isBonus={false} text={'x' + 200.25} color="#af60f8" />
            ) : (
              ''
            )}
            {animation ? (
              <ColorBox animation={animation} isBonus={false} text={'x' + 25.55} color="#2cabd9" />
            ) : (
              ''
            )}
            {animation ? (
              <ColorBox
                animation={animation}
                isBonus={true}
                width="70%"
                text={'x' + 2.75}
                color="#f8bf60"
              />
            ) : (
              ''
            )}
            {animation ? (
              <ColorBox animation={animation} isBonus={false} text={'x' + 7.25} color="white" />
            ) : (
              ''
            )}
            {animation ? (
              <ColorBox animation={animation} isBonus={false} text={'x' + 75.84} color="#298854" />
            ) : (
              ''
            )}
          </div>
        </ScrollableComponent>
      </div>
      <div
        className="flex-none h-full 
        px-[10px] gap-[3px] py-[8px]
        xl:w-[106px] lg:w-[84.8px] md:w-[63.6px] justify-center md:flex hidden
        grid gird-cols-6 items-center
        items-center"
      >
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <AmmoItem key={i} isFull={ammoes > i} />
        ))}
      </div>
    </div>
  );
};

export default MiddleTopBar;
