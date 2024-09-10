import Button from '../../../shared/Button';
import Icon from '../../../shared/Icon';
import UserLevelBar from '../UserLevelBar';

const UserStatus = () => {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center gap-y-[4px]
        pt-[10px]"
      >
        <div className="leading-none flex items-center gap-x-[3px]">
          <span className="text-[#F8BF60] justify-center flex gap-x-[3px] items-center">
            <Icon name="star" raw size={12} />
            <span>70</span>
          </span>
          <span>Username12345</span>
        </div>
        <span>Joined on September 1, 2021(2 Weeks Ago)</span>
        <UserLevelBar className="md:w-[70%] w-[100%] md:h-[20px] h-[10px]" level={175} />
      </div>
      <div className="w-full h-[1px] bg-[#1C2127] " />
      <div className="flex flex-row justify-center gap-x-[20%]">
        <Button className="text-[#F8BF60] flex items-center gap-[3px]">
          <Icon name="wallet" raw /> TIP
        </Button>
        <Button className="text-[#F8BF60] flex items-center gap-[3px]">
          <Icon name="DontDisturb" raw /> BLOCK
        </Button>
      </div>
    </>
  );
};

export default UserStatus;
