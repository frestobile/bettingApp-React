import { FC, ReactNode } from 'react';

interface IShadowButtonProps {
  id?: string;
  children?: ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: (e: any) => void;
  disabled?: boolean;
}

const ShadowButton: FC<IShadowButtonProps> = ({
  id,
  children,
  className,
  onClick,
  type,
  ...rest
}) => {
  return (
    <button
      id={id}
      type={`${type ? type : 'button'}`}
      className={`transition duration-[100ms]
            active:translate-y-[3px]
            ${className || ''}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default ShadowButton;
