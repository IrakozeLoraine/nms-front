import React, { ReactNode } from 'react';
import LogoText from '../atoms/LogoText';

export default function AuthForm({ children }: { children: ReactNode }) {
  return (
    <div className="bg-primary h-screen">
      <div className="grid xl:grid-cols-2 xl:py-20 xl:px-52">
        <div className="hidden xl:block">
          <LogoText />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
