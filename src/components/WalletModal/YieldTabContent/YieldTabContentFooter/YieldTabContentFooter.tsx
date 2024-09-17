import Button from '../../../../shared/Button';

const YieldTabContentFooter = () => {
  return (
    <div className="flex flex-col gap-[10px] mx-[15px] ">
      <p className="text-center">Improve your account security with Two-Factor Authentication</p>
      <Button
        className="bg-[#1c2127] h-[48px]
    border-[2px] border-[#f8bf60]
    rounded-[5px]"
      >
        ENABLE 2FA
      </Button>
    </div>
  );
};

export default YieldTabContentFooter;
