import Icon from '../../../shared/Icon';

const InviteFriendGuide = () => {
  return (
    <div className="flex flex-col gap-1">
      <div
        className="rounded-t-[4px] flex flex-wrap
        text-white text-center
        px-[20px] py-[15px]
        bg-[#1c2127]"
      >
        Invite your friends and receive commission from every bet! You will receive commission for
        every user that registers and plays through your links, regardless if they win or less.
      </div>
      <div
        className="rounded-b-[4px] flex flex-wrap flex-row
        px-[20px] py-[15px] items-center justify-between
        px-[17px] py-[15px] text-white
        bg-[#1c2127]"
      >
        <div className="flex-auto flex flex-wrap text-center">
          SHARE YOUR LINK <br />
          AND INVITE FRIENDS
        </div>
        <Icon name="forwardArrow" className="flex-auto " raw size={14} />
        <div className="flex-auto flex flex-wrap text-center">
          RECEIVE COMMISSION <br />
          ON EVERY BET
        </div>
        <Icon name="forwardArrow" className="flex-auto " raw size={14} />
        <div className="flex-auto flex flex-wrap text-center">
          STAKE TO INCREASE <br />
          REWARDS EXPONENTIALLY
        </div>
      </div>
    </div>
  );
};

export default InviteFriendGuide;
