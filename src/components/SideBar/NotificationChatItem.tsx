import Icon from '../../shared/Icon';

const NotificationChatItem = ({ bgColor, number, name, dValue }) => {
  return (
    <div
      className="
                bg-[#2C3137]
                border-x-[6px]
                border-[#F8BF60] py-[12px]
                px-[8px] xl:px-[16px] lg::px-[12.8px] md:px-[9.6px]
                xl:text-[14px] lg:text-[11.2px] md:text-[8.4px] text-[7px]
                text-white"
    >
      <div className="text-[#F8BF60] whitespace-nowrap text-center">
        RUSSIAN ROULETTE (SOLO | NORMAL)
      </div>

      <div className="flex gap-[4px] justify-center ">
        <div
          className="rounded-[5px] flex items-center px-[4px] text-black float-left text-black"
          style={{ backgroundColor: bgColor || '#298854' }}
        >
          <Icon
            name="star"
            color="black"
            className="xl:h-[14px] xl:w-[14px]
          xl:h-[11.2px] xl:w-[11.2px]
          xl:h-[8.4px] xl:w-[8.4px]
          h-[7px] w-[7px]"
            raw
          />{' '}
          {number}
        </div>
        <span style={{ color: bgColor || '#298854' }}>{name}</span> Just won
        <span className="text-[#f8bf60] flex items-center">
          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
            .format(dValue)
            .replace('$', '')}{' '}
          <Icon
            name="diamondIcon"
            className="xl:h-[14px] xl:w-[14px]
          xl:h-[11.2px] xl:w-[11.2px]
          xl:h-[8.4px] xl:w-[8.4px]
          h-[7px] w-[7px]"
            color="#f8bf60"
            raw
          />
        </span>
      </div>
    </div>
  );
};

export default NotificationChatItem;
