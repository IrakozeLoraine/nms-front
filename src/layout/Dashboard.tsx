import React, { ReactNode, useState } from 'react';
import Notification from '../components/atoms/Notification';
import Search from '../components/atoms/Search';
import NotificationTrigger from '../components/molecule/NoficationTrigger';
import Header from '../components/organisms/Header';
import LeftSidebar from '../components/organisms/LeftSidebar';
import RightSidebar from '../components/organisms/RightSidebar';
import { DashboardProps } from '../types/custom/Dashboard';
import { NotificationStatus } from '../types/notifications/Notification';

export default function Dashboard({
  children,
  showSearch,
  handleSearch,
  searchname,
  searchvalue,
}: DashboardProps) {
  return (
    <div className="flex bg-secondary">
      {/* sidebar */}
      <div className="hidden md:block w-80 h-screen top-0 lg:sticky ">
        <LeftSidebar />
      </div>
      {/* content */}
      <div className="w-full md:col-span-9 xl:col-span-9 col-span-10 block">
        <Header
          handleSearch={handleSearch}
          searchname={searchname}
          showSearch={showSearch}
          searchvalue={searchvalue}
        />
        <div>{children}</div>
      </div>
      {/* rightsidebar */}
      <div className="hidden md:block w-80 h-screen top-0 lg:sticky ">
        <RightSidebar />
      </div>
    </div>
  );
}
