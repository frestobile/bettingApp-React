import { useEffect, useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import { motion } from 'framer-motion';
import { ILayout } from './types';
import Header from '../Header';
import Footer from '../Footer';
import SideBar from '../SideBar';

function MainLayout({ children }: ILayout) {
  const isLg = useMediaQuery('(max-width: 1024px)');
  const isMd = useMediaQuery('(max-width: 767px)');
  const isXl = useMediaQuery('(max-width: 1280px)');
  const [isOpen, setIsOpen] = useState(true);
  const [width, setWidth] = useState(100);

  useEffect(() => {
    if (isMd && isOpen) {
      setWidth(180);
    } else if (isLg && isOpen) {
      setWidth(240);
    } else if (isXl && isOpen) {
      setWidth(300);
    } else {
      setWidth(300);
    }
  }, [isOpen, isLg, isMd, isXl]);

  const MainAreaVariants = {
    open: { width: 'calc(100% - ' + width + 'px)' },
    closed: { width: '100%' }
  };

  return (
    <div
      className="flex md:flex-row flex-row w-full bg-[#1c2127] font-[Montserrat-semi]
    xl:text-[16px] md:text-[12.8px] md:text-[9.6px]"
    >
      <motion.div
        style={{ width: isOpen ? 'calc(100% - ' + width + 'px)' : '100%' }}
        initial={isOpen ? 'open' : 'closed'}
        animate={isOpen ? 'open' : 'closed'}
        variants={MainAreaVariants}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col md:h-full ">
          <Header isOpen={isOpen} toggleChatSection={setIsOpen} />
          {children}
          <Footer />
        </div>
      </motion.div>
      <SideBar open={isOpen} setOpen={setIsOpen} />
    </div>
  );
}

export default MainLayout;
