import { useState } from 'react';
import NumberProcess from '../NumberProcess';
import Icon from '../../shared/Icon';

const UnstakeInputTag = ({ unstake, setUnstake }) => {
  const [touched, setTouched] = useState(false);

  return (
    <div
      className="flex flex-col flex-auto
					relative
					bg-[#1c2127]
					h-[48px]
					justify-center"
    >
      <input
        type="number"
        id="unstake"
        onFocus={() => {
          setTouched(true);
        }}
        minLength={0}
        step={0.01}
        onBlurCapture={() => {
          setTouched(false);
        }}
        className={`h-full bg-[#1c2127]
			px-[10px]
			text-center
			outline-none rounded-l-[4px]
			${touched ? '' : 'opacity-0'}`}
        value={unstake}
        min={0}
        onChange={(e) => {
          setUnstake(e.target.value);
        }}
      />
      <label
        htmlFor="unstake"
        className={`absolute px-[15px] ${
          touched || unstake.length
            ? 'transition duration-[0.3] -translate-y-6 text-[10px]'
            : 'transition duration-[0.3]'
        }`}
      >
        Unstake
      </label>
      <label
        htmlFor="unstake"
        className={`absolute flex gap-[3px] items-center left-[50%] translate-x-[-50%] ${
          touched ? 'hidden' : ''
        }`}
      >
        <NumberProcess shouldRemoveFloat={false} number={unstake} />{' '}
        <Icon color="f8bf60" name="diamondIcon" raw size={14} />
      </label>
      <div
        className={`absolute h-0 top-0 bg-transparent
							!border-b-[1px] ${
                touched
                  ? unstake.length
                    ? 'border-[#f8bf60] left-[63px] w-[calc(100%-68px)]'
                    : 'border-[#ed2a1d] left-[63px] w-[calc(100%-68px)]'
                  : unstake.length
                    ? 'border-[white] left-[63px] w-[calc(100%-68px)]'
                    : 'border-white w-[calc(100%-10px)] left-[5px]'
              }`}
      />
      <div
        className={`absolute h-full w-[10px]
					border-[1px] !border-r-[0px] rounded-l-[4px] ${
            touched
              ? unstake.length
                ? 'border-[#f8bf60]'
                : 'border-[#ed2a1d]'
              : unstake.length
                ? 'border-[white]'
                : ''
          }`}
      />
      <div
        className={`absolute h-0 w-[calc(100%-8px)] bottom-0 bg-transparent left-[8px]
					!border-b-[1px] rounded-l-[4px] ${
            touched
              ? unstake.length
                ? 'border-[#f8bf60]'
                : 'border-[#ed2a1d]'
              : unstake.length
                ? 'border-[white]'
                : 'border-white'
          }`}
      />
      <div
        className={`absolute h-full w-[10px] right-0
					border-[1px] !border-l-[0px] rounded-r-[4px] ${
            touched
              ? unstake.length
                ? 'border-[#f8bf60]'
                : 'border-[#ed2a1d]'
              : unstake.length
                ? 'border-[white]'
                : ''
          }`}
      />
    </div>
  );
};

export default UnstakeInputTag;
