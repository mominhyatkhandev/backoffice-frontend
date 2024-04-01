import React from 'react';

import type { IHeadingElementProps } from '@/interfaces/interface';

const H7 = ({ medium = false, className, children }: IHeadingElementProps) => {
  return (
    <span
      className={`text-sm ${
        medium ? `font-medium` : `font-semibold`
      } leading-tight ${className}`}
    >
      {children}
    </span>
  );
};

export default H7;
