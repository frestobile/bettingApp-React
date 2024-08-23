import { FC, ReactNode } from 'react';
import { useFormState } from 'react-hook-form';

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: (e: any) => void;
  disabled?: boolean;
  disableClass?: string;
}

const Button: FC<ButtonProps> = ({
  className,
  children,
  type,
  onClick,
  disabled,
  disableClass,
  ...rest
}) => {
  return (
    <button
      type={type ? type : 'button'}
      className={`transition duration-[100ms]
      active:translate-y-[3px]
      ${
        type === 'submit'
          ? useFormState().isValid
            ? className || ''
            : disableClass || ''
          : className || ''
      }`}
      onClick={onClick}
      disabled={disabled || (type === 'submit' ? !useFormState().isValid : false)}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
