import React, { ReactNode } from 'react';
import Search from '../components/atoms/Search';
import LeftSidebar from '../components/organisms/LeftSidebar';
import RightSidebar from '../components/organisms/RightSidebar';

export default function Dashboard({
  children,
  showSearch = false,
  handleSearch,
  searchname = '',
  searchvalue = '',
}: {
  children: ReactNode;
  showSearch?: boolean;
  handleSearch?: () => {};
  searchname?: string;
  searchvalue?: string;
}) {
  const searchHandle = () => {
    if (handleSearch) {
      handleSearch;
    }
  };
  return (
    <div className="flex bg-secondary">
      {/* sidebar */}
      <div className="hidden md:block w-80 h-screen top-0 lg:sticky ">
        <LeftSidebar />
      </div>
      {/* content */}
      <div className="w-full md:col-span-9 xl:col-span-9 col-span-10 block">
        {showSearch && (
          <div className="flex items-center justify-center py-9">
            <Search
              handleChange={searchHandle}
              inputname={searchname}
              value={searchvalue}
            />
          </div>
        )}
        <div className="block relative w-full h-auto py-5 px-8">{children}</div>
      </div>
      {/* rightsidebar */}
      <div className="hidden md:block w-80 h-screen top-0 lg:sticky ">
        <RightSidebar />
      </div>
    </div>
  );
}
