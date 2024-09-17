import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import { motion } from 'framer-motion';
import Topbar from './Topbar';
import ScrollableComponent from '../../shared/ScrollbarComponent';
import ChatItem from './ChatItem';
import NotificationChatItem from './NotificationChatItem';
import BottomBar from './BottomBar';

const Sidebar = ({ open, setOpen }) => {
  const [width, setWidth] = useState('0');
  const isXl = useMediaQuery('(max-width: 1280px)');
  const isLg = useMediaQuery('(max-width: 1024px)');
  const isMd = useMediaQuery('(max-width: 767px)');
  const [chats] = useState<any>([
    {
      number: 35,
      type: 'normal',
      name: 'Kusti',
      msg: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada nunc vel risus commodo viverra maecenas. Sit amet commodo nulla facilisi',
      bgColor: '#8D52C6'
    },
    {
      number: 24,
      type: 'normal',
      name: 'Kusti',
      msg: 'sem integer vitae justo eget. Vulputate odio ut enim blandit volutpat maecenas',
      bgColor: '#298854'
    },
    {
      number: 439,
      type: 'normal',
      name: 'Kusti',
      msg: 'lobortis scelerisque fermentum dui faucibus in ornare. Ut enim blandit volutpat maecenas volutpat blandit aliquam. Purus in mollis nunc sed id.',
      bgColor: '#F8BF60'
    },
    {
      number: 162,
      type: 'normal',
      name: 'Kusti',
      msg: 'urna molestie at elementum eu facilisis. Nec nam aliquam sem et tortor consequat',
      bgColor: '#BD2929'
    },
    { number: 758, type: 'notification', name: 'Kusti', bgColor: '#F8BF60', dValue: 5297.36 },
    {
      number: 886,
      type: 'normal',
      name: 'Kusti',
      msg: 'et malesuada fames ac turpis egestas maecenas. Aliquam id diam maecenas ultricies mi',
      bgColor: '#F8BF60'
    },
    {
      number: 750,
      type: 'normal',
      name: 'Kusti',
      msg: 'aenean sed adipiscing diam donec adipiscing tristique risus nec',
      bgColor: '#F8BF60'
    },
    {
      number: 52,
      type: 'normal',
      name: 'Kusti',
      msg: 'pellentesque sit amet porttitor eget dolor. Cum sociis natoque penatibus et',
      bgColor: '#2995BD'
    },
    {
      number: 117,
      type: 'admin',
      name: 'Kusti',
      msg: 'ut lectus arcu bibendum at varius. Id venenatis a condimentum vitae sapien pellentesque',
      bgColor: '#BD2929'
    },
    {
      number: 974,
      type: 'moderator',
      name: 'Kusti',
      msg: 'isi porta lorem mollis aliquam ut porttitor leo',
      bgColor: '#F8BF60'
    },
    {
      number: 63,
      type: 'normal',
      name: 'Kusti',
      msg: 'amet venenatis urna cursus eget. Dictum non',
      bgColor: '#2995BD'
    },
    {
      number: 97,
      type: 'normal',
      name: 'Kusti',
      msg: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada nunc vel risus commodo viverra maecenas. Sit amet commodo nulla facilisi',
      bgColor: '#8D52C6'
    },
    {
      number: 22,
      type: 'normal',
      name: 'Kusti',
      msg: 'sem integer vitae justo eget. Vulputate odio ut enim blandit volutpat maecenas',
      bgColor: '#298854'
    },
    {
      number: 758,
      type: 'normal',
      name: 'Kusti',
      msg: 'lobortis scelerisque fermentum dui faucibus in ornare. Ut enim blandit volutpat maecenas volutpat blandit aliquam. Purus in mollis nunc sed id',
      bgColor: '#F8BF60'
    },
    {
      number: 188,
      type: 'normal',
      name: 'Kusti',
      msg: 'urna molestie at elementum eu facilisis. Nec nam aliquam sem et tortor consequat',
      bgColor: '#BD2929'
    },
    {
      number: 28,
      type: 'normal',
      name: 'Kusti',
      msg: 'quam id leo in vitae turpis. Tristique senectus et netus et malesuada fames ac turpis egestas',
      bgColor: '#298854'
    },
    {
      number: 1250,
      type: 'normal',
      name: 'Kusti',
      msg: 'et malesuada fames ac turpis egestas maecenas. Aliquam id diam maecenas ultricies mi',
      bgColor: '#F8BF60'
    },
    {
      number: 97,
      type: 'normal',
      name: 'Kusti',
      msg: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada nunc vel risus commodo viverra maecenas. Sit amet commodo nulla facilisi',
      bgColor: '#8D52C6'
    }
  ]);
  const sidebarVariants = {
    open: { width: width, opacity: 1 },
    closed: { width: '0', opacity: 0, display: 'none' }
  };

  useEffect(() => {
    if (isMd && open) {
      setWidth('100%');
    } else if (isLg && open) {
      setWidth('240px');
    } else if (isXl && open) {
      setWidth('300px');
    } else {
      setWidth('300px');
    }
  }, [open, isLg, isMd, isXl]);
  return (
    <motion.div
      className="flex flex-col bg-[#20252B] z-[45] fixed right-0 md:h-full h-screen"
      style={{ width: width }}
      initial={open ? 'open' : 'closed'}
      animate={open ? 'open' : 'closed'}
      variants={sidebarVariants}
      // transition={{ duration: 0 }}
    >
      <Topbar open={open} setOpen={setOpen} />
      <ScrollableComponent height="calc(100vh - 140px)">
        <div className="flex w-full flex-col">
          {chats.map((c, i) =>
            c.type === 'notification' ? (
              <NotificationChatItem key={i} {...c} />
            ) : (
              <ChatItem key={i} {...c} />
            )
          )}
        </div>
      </ScrollableComponent>
      <BottomBar />
    </motion.div>
  );
};

export default Sidebar;
