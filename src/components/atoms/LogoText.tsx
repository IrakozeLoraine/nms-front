import React from 'react';
import Heading from './Heading';

export default function LogoText({
  ignorePadding = false,
}: {
  ignorePadding?: boolean;
}) {
  return (
    <Heading
      fontSize="text-5xl"
      fontWeight="font-bold"
      color="text-main"
      className={`${!ignorePadding ? 'xl:py-60' : 'py-14'} text-center`}
    >
      NMS
    </Heading>
  );
}
