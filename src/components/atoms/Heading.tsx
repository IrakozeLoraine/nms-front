import React, { ReactNode } from 'react';
import { HeadingProps } from '../../types/custom/Heading';

const Heading = ({
  fontSize = 'text-lg',
  fontWeight = 'font-medium',
  color = 'text-txt-primary',
  className = '',
  children,
}: HeadingProps) => {
  return (
    <h2 className={`${fontSize} ${fontWeight} ${color} ${className}`}>
      {children}
    </h2>
  );
};

export default Heading;
