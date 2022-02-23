import React, { ReactNode } from 'react';
import { HeadingProps } from '../../types/custom/Heading';

const Heading = ({
  fontSize = 'lg',
  fontWeight = 'medium',
  color = 'txt-primary',
  className = '',
  children,
}: HeadingProps) => {
  return (
    <h2
      className={`text-${fontSize} font-${fontWeight} text-${color} ${className}`}
    >
      {children}
    </h2>
  );
};

export default Heading;
