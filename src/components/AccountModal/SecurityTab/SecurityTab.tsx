import Button from '../../../shared/Button';
import EmailForm from '../EmailForm';
import PassWordFrom from '../PassWordFrom';

const SecurityTab = () => {
  return (
    <div
      className="flex flex-col items-center
        py-[10px] gap-y-[10px]"
    >
      <div className="flex flex-row w-full justify-between items-center">
        Password
        <Button className="text-[#F8BF60] p-[5px]">EDIT</Button>
      </div>
      <PassWordFrom />
      <div className="h-[1px] mt-[10px] bg-[#3c3f42] w-full" />
      <div className="flex flex-row w-full justify-between items-center">
        Email
        <Button className="text-[#F8BF60] p-[5px]">EDIT</Button>
      </div>
      <EmailForm />
    </div>
  );
};

export default SecurityTab;
