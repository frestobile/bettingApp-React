import React, { ReactNode } from 'react';
import Icon from '../Icon';
import Media from '../Media';
import LogoImg from '../../assets/images/logo.svg';

interface IModal {
  onClose: () => any;
  showCloseButton?: boolean;
  children: ReactNode;
  isVisible: Boolean;
  classNames?: string;
  title?: string;
  isSign?: boolean;
  isDefaultHeader?: boolean;
}

export const ModalHeader = ({ className = '', children, showCloseButton = true, onClose }) => (
  <div
    className={`flex flex-row justify-center items-center
    border-b-[1px] border-[#1c2127] relative
    p-[15px] ${className || ''}`}
  >
    {children}
    {showCloseButton && (
      <button
        className="absolute right-0 flex justify-center m-[15px]"
        type="button"
        onClick={onClose}
      >
        <Icon name="close" raw color="white" size={20} />
      </button>
    )}
  </div>
);

const Modal = ({
  onClose,
  showCloseButton,
  children,
  isVisible,
  classNames,
  title = '',
  isSign = false,
  isDefaultHeader = true
}: IModal) => (
  <div
    className={`fixed top-0 left-0 w-screen h-screen items-center justify-center z-40
        xl:pt-[80px] lg:pt-[64px] md:pt-[48px]
        bg-[#090a0b99] fade_modal
        ${isVisible ? 'flex' : 'hidden'}
      `}
    onClick={async (e) => (e.target === e.currentTarget ? await onClose() : () => {})}
  >
    <div
      className={`fade_modal bg-[#2c3137]
      flex flex-col rounded-[10px] gap-[20px] relative ${classNames || ''}`}
    >
      {isDefaultHeader ? (
        <div
          className="flex flex-row justify-between items-center
      border-b-[1px] border-[#1c2127]
      p-[15px]"
        >
          {isSign ? (
            <Media
              type="image"
              link={LogoImg}
              className="!h-[46px] w-auto !static cursor-pointer"
              containerClasses="px-[7px] h-full w-full items-center sm:flex hidden"
            />
          ) : (
            <span>{title}</span>
          )}

          {showCloseButton && (
            <button className="flex justify-center" type="button" onClick={onClose}>
              <Icon name="close" raw color="white" size={20} />
            </button>
          )}
        </div>
      ) : (
        ''
      )}
      {children}
    </div>
  </div>
);

export default Modal;
