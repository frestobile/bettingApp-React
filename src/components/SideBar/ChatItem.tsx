import Icon from '../../shared/Icon';

const ChatItem = ({ bgColor, number, name, msg, type }) => {
  return (
    <div
      className="
                px-[12px] py-[6px] xxl:px-[16px]
                xl:text-[14px] lg:text-[11.2px] md:text-[8.4px] text-[7px]
                text-white"
    >
      {type === 'admin' && (
        <span className="rounded-[5px] bg-black text-white flex justify-start mr-[5px] items-center px-[4px] float-left">
          <Icon
            name="CrownIcon"
            color="white"
            className="xl:h-[14px] xl:w-[14px]
xl:h-[11.2px] xl:w-[11.2px]
xl:h-[8.4px] xl:w-[8.4px]
h-[7px] w-[7px]"
            raw
          />{' '}
          ADMIN
        </span>
      )}
      {type === 'moderator' && (
        <span className="rounded-[5px] bg-white flex justify-start mr-[5px] items-center px-[4px] text-black float-left">
          <Icon
            name="ShieldIcon"
            color="black"
            className="xl:h-[14px] xl:w-[14px]
xl:h-[11.2px] xl:w-[11.2px]
xl:h-[8.4px] xl:w-[8.4px]
h-[7px] w-[7px]"
            raw
          />{' '}
          MODERATOR
        </span>
      )}
      <span
        className="rounded-[5px] flex justify-start items-center px-[4px] text-black float-left"
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
      </span>
      <span className="pl-[4px]" style={{ color: bgColor || '#298854' }}>
        {name}
      </span>
      : {msg}
    </div>
  );
};

export default ChatItem;
