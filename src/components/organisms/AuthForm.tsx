import React, { ReactNode } from 'react';

export default function AuthForm({ children }: { children: ReactNode }) {
  return (
    <div className="bg-primary h-screen">
      <div className="grid xl:grid-cols-2 xl:py-20 xl:px-52">
        <div className="hidden xl:block">
          <h2 className="text-5xl font-bold text-main xl:py-60 text-center">
            NMS
          </h2>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
