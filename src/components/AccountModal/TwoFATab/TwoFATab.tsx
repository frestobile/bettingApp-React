import { useState } from 'react';
import QRCode from 'react-qr-code';
import Button from '../../../shared/Button';
import TwoFAForm from '../TwoFAForm';

const TwoFATab = () => {
  const [key] = useState('ST5UH5COUN5VMF3YHZIJKZ2JOVAF4M71');
  return (
    <div className="flex flex-col items-center gap-[10px]">
      <div className="flex justify-center text-center text-white ">Two-Factor Authentication</div>
      <div className="flex flex-col text-center justify-center text-[#8c8f92] ">
        <p>1.Scan the QR code or enter the 'Key' manually</p>
        <p>into your authenticator</p>
      </div>
      <div className="flex flex-col justify-center text-center text-[#8c8f92] w-full">
        <p>2. Lastly, enter the 2FA code you receive from the authenticator app or device</p>
        <p>and your password to complete 2FA setup.</p>
      </div>
      <div className="flex flex-col justify-center text-center text-[#8c8f92] ">Key:</div>
      <div className="flex flex-row w-full">
        <input
          type="text"
          name="key"
          className="border border-white flex-auto rounded-l-[4px]
                    bg-[#191e24] text-center
                    p-[12px]
                    "
          disabled
          value={key}
        />
        <Button
          className="p-[12px] bg-[white]
                rounded-r-[4px] text-black"
        >
          COPY
        </Button>
      </div>
      <div className="fit-centent bg-white p-[5px]">
        <QRCode
          // title="GeeksForGeeks"
          value={key}
          bgColor="white"
          fgColor="black"
          size={100}
        />
      </div>
      <TwoFAForm />
    </div>
  );
};

export default TwoFATab;
