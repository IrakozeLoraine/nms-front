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

export default function LeftSidebar() {
  const defaultLinks = () => {
    const links: SidebarLinkProps[] = [
      {
        title: 'Home',
        to: '/dashboard/home',
        iconLink: home,
      },
      {
        title: 'Notes',
        to: '/dashboard/notes',
        iconLink: note,
      },
      {
        title: 'Users',
        to: '/dashboard/users',
        iconLink: profile,
      },
    ];
    return links;
  };
  return (
    <div className="flex flex-col justify-between bg-primary md:h-screen overflow-hidden">
      <Link to={'/dashboard/home'} className="px-4 py-4">
        <LogoText ignorePadding />
      </Link>
      <div className="mb-auto h-10">
        <SidebarLinks links={defaultLinks()} />
      </div>
      <div className="h-10 mb-9 flex items-center justify-center">
        <Button
          styleType="text"
          onClick={() => {}}
          className="flex items-center gap-3"
          hoverStyle="no-underline"
        >
          <img src={logout} alt="" />
          <span className={`text-main text-base px-1 font-medium uppercase`}>
            Logout
          </span>
        </Button>
      </div>
    </div>
  );
}
