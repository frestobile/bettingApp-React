import Button from '../../../shared/Button';
import Form from '../../../shared/Form';
import { validation } from './validation';
import TextInput from '../../SignPage/TextInput';
import { useState } from 'react';

const TwoFAForm = () => {
  const [userPassword, setUserPassword] = useState('');
  const [twoFACode, setTwoFACode] = useState('');

  return (
    <Form
      onSubmit={async (v) => {
        console.log(v);
      }}
      validationSchema={validation}
      className="w-full flex flex-col  gap-[15px]"
    >
      <TextInput
        labelFloating="text-white left-[16px] bg-clip-border xl:translate-y-[calc(-100%-1px)] lg:translate-y-[calc(-100%-4px)] translate-y-[calc(-100%-7px)] scale-85 absolute duration-1 transition "
        labelNormal="text-[#2c3137] left-[16px] absolute transition "
        type="password"
        id="userpass"
        name="userpass"
        isBorder={true}
        className="!border-[#2c3137] border-[1px]"
        value={userPassword}
        onChange={setUserPassword}
        placeholder=""
        label="Enter Current Password"
      />
      <TextInput
        labelFloating="text-white left-[16px] bg-clip-border xl:translate-y-[calc(-100%-1px)] lg:translate-y-[calc(-100%-4px)] translate-y-[calc(-100%-7px)] scale-85 absolute duration-1 transition "
        labelNormal="text-[#2c3137] left-[16px] absolute transition "
        type="text"
        id="twofacode"
        name="twofacode"
        isBorder={true}
        className="!border-[#2c3137] border-[1px]"
        value={twoFACode}
        onChange={setTwoFACode}
        placeholder=""
        label="Enter 2FA Code"
      />
      <Button
        disableClass="bg-[#3c3f42] !h-[40px] !rounded-[5px] !transform-none text-black
        shadow-[0px_6px_0px_0px_rgba(45,49,54,1)]"
        type="submit"
        className="!rounded-[5px] !h-[40px]
                    hover:mix-blend-difference !bg-[#f8bf60] text-black
                    shadow-[0px_6px_0px_0px_rgba(153,122,73,1)]"
      >
        ENABLE 2FA
      </Button>
    </Form>
  );
};

export default TwoFAForm;
