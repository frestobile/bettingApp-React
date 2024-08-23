import { ReactNode, FC } from 'react';
import SimpleBar from 'simplebar-react';

interface IScrollableComponent {
  children: ReactNode;
  className?: string;
  height?: string;
}

const ScrollableComponent: FC<IScrollableComponent> = ({ children, className, height }) => {
  return (
    <SimpleBar style={{ height: height || '' }} className={className}>
      {children}
    </SimpleBar>
  );
};

export default ScrollableComponent;
