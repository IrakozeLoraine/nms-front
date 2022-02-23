import React, { ReactNode } from 'react';
import LeftSidebar from '../components/organisms/LeftSidebar';
import RightSidebar from '../components/organisms/RightSidebar';

export default function Dashboard({ children }: { children: ReactNode }) {
  return (
    <div className="flex bg-secondary">
      {/* sidebar */}
      <div className="hidden md:block w-80 h-screen top-0 lg:sticky ">
        <LeftSidebar />
      </div>
      {/* content */}
      <div className="w-full md:col-span-9 xl:col-span-9 col-span-10 block">
        <div className="block relative w-full h-auto py-5 px-8">{children}</div>
      </div>
      {/* rightsidebar */}
      <div className="hidden md:block w-80 h-screen top-0 lg:sticky ">
        <RightSidebar />
      </div>
    </div>
  );
}
