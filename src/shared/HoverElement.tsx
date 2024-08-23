import React, { useRef, useState, ReactNode, useEffect } from 'react';
import useOnHover from '../hooks/useOnHover';

interface IHoverElement {
  children: ReactNode;
  className: string;
  text: string;
}

function HoverElement({ children, className, text }: IHoverElement) {
  const [formattedText, setFormattedText] = useState('');
  const [isHover, setIsHover] = useState(false);
  const ref = useRef<any>();

  const changeText = (isHoverHook: boolean) => {
    setIsHover(isHoverHook);
  };

  useOnHover(ref, changeText);
  useEffect(() => {
    if (!isHover && children) {
      setFormattedText(children.toString().trim());
    } else {
      setFormattedText(text);
    }
  }, [children, isHover]);
  return (
    <p ref={ref} className={`${className} truncate`}>
      {formattedText}
    </p>
  );
}

export default HoverElement;
