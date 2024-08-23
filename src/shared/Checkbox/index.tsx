/* eslint-disable */
import { InputHTMLAttributes } from 'react';
import TickIcon from './tick.png';
import Media from '../Media';

interface ICheckbox extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  id: string;
  label?: string;
}

const Checkbox = ({ checked, onChange, id, className, label }: ICheckbox) => {
  return (
    <>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        hidden
        id={id}
        className="hidden"
      />
      <label htmlFor={id} className="cursor-pointer flex gap-x-[10px] items-center">
        <div
          className={`w-[16px] h-[16px] relative rounded-[5px]
                flex justify-center items-center
                bg-[#403D57]
                ${className || ''}`}
        >
          {checked && <Media type="image" link={TickIcon} containerClasses="w-[10px] h-[10px]" />}
        </div>
        {label && <pre className="text-white text-[25px]   font-quicksand">{label}</pre>}
      </label>
    </>
  );
};

export default Checkbox;
