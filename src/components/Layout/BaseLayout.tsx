import React from 'react';
import { ILayout } from './types';

function BaseLayout({ children }: ILayout) {
  return (
    <div
      className="relative z-[2] font-[Montserrat-semi]
      overflow-hidden
      w-[100vw] !h-[100vh]
      bg-[#312E43]"
    >
      {children}
    </div>
  );
}

export default BaseLayout;
