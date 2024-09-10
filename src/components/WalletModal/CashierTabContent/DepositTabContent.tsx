import QRCode from 'react-qr-code';
import CoinSelection from './CoinSelection';
import Icon from '../../../shared/Icon';

const DepositTabContent = ({ address }) => {
  return (
    <div
      className="flex flex-col gap-[10px]
    items-center justify-center"
    >
      <CoinSelection classNames="!px-[70px] !bg-[#1c2127]" />
      <div
        className="flex flex-row w-full
      items-center
      relative"
      >
        <input
          type="text"
          name="address"
          className="border border-none w-full flex-auto rounded-[4px]
                    bg-[#1c2127] text-center
                    px-[12px] h-[48px]
                    "
          disabled
          value={address}
        />
        <Icon name="copy" size={14} className="absolute right-[15px] " />
      </div>
      <div className="fit-centent bg-white p-[5px]">
        <QRCode
          // title="GeeksForGeeks"
          value={address}
          bgColor="white"
          fgColor="black"
          size={200}
        />
      </div>
      <span className="text-[#96989b]">
        Only send Bitcoin to this address, credits after one confirmation.
      </span>
    </div>
  );
};

export default DepositTabContent;
