import React from 'react';

interface SvgProps {
  className?: string;
  color?: string;
  stroke?: string;
  width?: string;
  height?: string;
  children: React.ReactNode;
}

const CustomizedSvg: React.FC<SvgProps> = ({ color, stroke, className, children }) => {
  const styles = {
    fill: color,
    stroke: stroke,
    width: '100%',
    height: '100%'
  };

  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%">
        {React.cloneElement(children as React.ReactElement, { style: styles })}
      </svg>
    </div>
  );
};

export default CustomizedSvg;
