import React from 'react';
import { SidebarLinkProps } from '../../types/custom/Sidebar';
import LogoText from '../atoms/LogoText';
import SidebarLinks from '../molecule/SidebarLinks';

import home from '../../public/icons/home.svg';
import note from '../../public/icons/note.svg';
import profile from '../../public/icons/profile.svg';
import logout from '../../public/icons/logout.svg';
import Button from '../atoms/Button';
import { Link } from 'react-router-dom';

export default function RightSidebar() {
  const defaultLinks = () => {
    const links: SidebarLinkProps[] = [
      {
        title: 'Mathematics',
        to: '/dashboard/home',
      },
      {
        title: 'English',
        to: '/dashboard/notes',
      },
      {
        title: 'Software Engineering',
        to: '/dashboard/notes',
      },
      {
        title: 'Project Management',
        to: '/dashboard/notes',
      },
      {
        title: 'Java',
        to: '/dashboard/notes',
      },
      {
        title: 'JavaScript',
        to: '/dashboard/notes',
      },
      {
        title: 'Physics',
        to: '/dashboard/users',
      },
      {
        title: 'Network Security',
        to: '/dashboard/notes',
      },
      {
        title: 'Embedded System',
        to: '/dashboard/notes',
      },
    ];
    return links;
  };
  return (
    <div className="w-60 max-w-xs bg-primary md:h-screen overflow-y-scroll">
      <h2 className={`text-2xl text-main pt-14 text-center uppercase`}>
        Courses
      </h2>
      <div className="mb-auto h-10">
        <div className={'py-12 '}>
          <SidebarLinks className="px-11" links={defaultLinks()} isRight />
        </div>

        <div className="flex items-center justify-center">
          <Button onClick={() => {}} hoverStyle="no-underline" className="px-3">
            <span className={`text-main text-base font-medium uppercase`}>
              View all
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
