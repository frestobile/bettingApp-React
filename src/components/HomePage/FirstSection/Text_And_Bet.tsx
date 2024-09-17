import { FC } from 'react';

interface ITextAndBet {
  text: string;
  bet: number;
  className?: string;
  containerClassName?: string;
}

const TextAndBet: FC<ITextAndBet> = ({ text, bet, className, containerClassName }) => {
  return (
    <div className="bg-[#2c3137] w-full">
      <div
        className={`${containerClassName || ''} m-[3px] bg-[#1C2127] flex justify-between p-[3px]
        text-[6px] md:text-[7.2px] lg:text-[9.6px] xl:text-[12px]`}
      >
        <span className={`flex flex-row items-center ${className || ''}`}>{text}</span>
        <div className={`gap-[2px] flex flex-row items-center ${className || ''}`}>
          <span className="text-[#f8bf60]">$</span>
          {bet < 1000000
            ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
                .format(bet)
                .replace('$', '')
            : bet / 1000000 + 'M'}
        </div>
      </div>
    </div>
  );
};

export default TextAndBet;
