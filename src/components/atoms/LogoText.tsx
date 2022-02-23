import React from 'react';

export default function LogoText({
  ignorePadding = false,
}: {
  ignorePadding?: boolean;
}) {
  return (
    <h2
      className={`text-5xl font-bold text-main ${
        !ignorePadding ? 'xl:py-60' : 'py-14'
      } text-center`}
    >
      NMS
    </h2>
  );
}
