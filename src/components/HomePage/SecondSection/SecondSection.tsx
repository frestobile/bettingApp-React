import { useEffect, useState, useRef } from 'react';
import PistolImg from '../../../assets/images/pistol.svg';
import MiddleTopBar from './MiddleTopBar';
import BottomColorBoxList from './BottomColorBoxList';

import MiddleBottomBar from './MiddleBottomBar/MiddleBottomBar';
import { useMain } from '../../../providers/MainProvider';
import NumberProcess from '../../NumberProcess';

const SecondSection = () => {
  const { isPlaying } = useMain();
  const [counter, setCounter] = useState(0);
  const [isShowVideo, setIsShowVideo] = useState(true);
  const vidRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      if (counter <= 0) {
        setCounter(3);
        setIsShowVideo(false);
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (counter <= 0) {
      if (!isShowVideo) {
        const playPromise = vidRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setTimeout(() => {
                setIsShowVideo(true);
              }, 2500);
            })
            .catch((error) => {
              console.log('Video is not loaded.', error);
            });
        }
      }
    } else {
      const interval = setInterval(() => {
        if (counter > 0) {
          setCounter(counter - 0.01);
        }
      }, 5); // Adjust the interval for speed reduction
      return () => clearInterval(interval);
    }
  }, [counter]);

  return (
    <div className="md:col-span-6 flex flex-col gap-[3px] md:order-2 order-1 ">
      <MiddleTopBar />
      <div
        className="!max-h-[100%] flex overflow-hidden
      md:h-[calc(100vh-332px)] 
      w-full bg-[#2c3137] justify-center items-center
      relative"
      >
        <div
          className={`flex w-full h-full
          absolute top-0 left-0
          transition-opacity duration-300 ease-in-out
          bg-[#2c3137]
          justify-center items-center
          text-white
          xl:text-[200px] md:text-[160px] md:text-[120px] text-[80px] ${
            counter > 0.3 ? 'opacity-1' : 'opacity-0'
          }`}
        >
          {<NumberProcess number={counter} shouldRemoveFloat={false} />}
        </div>

        <img src={PistolImg} alt="pistol" className={`w-[80%] ${isShowVideo ? '' : 'hidden'}`} />
        <video ref={vidRef} className={`w-full ${isShowVideo ? 'hidden' : ''}`}>
          <source src="/video/shooting.mp4" type="video/mp4" />
        </video>
      </div>
      <BottomColorBoxList />
      <MiddleBottomBar />
    </div>
  );
};

export default SecondSection;
