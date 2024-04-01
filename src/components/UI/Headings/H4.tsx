import React from 'react';

import type { IHeadingElementProps } from '@/interfaces/interface';

const H4 = ({ medium = false, children }: IHeadingElementProps) => {
  return (
    <div
      className={`text-2xl ${
        medium ? 'font-medium' : 'font-semibold'
      } leading-tight text-secondary-base`}
    >
      {children}
    </div>
  );
};

export default H4;
