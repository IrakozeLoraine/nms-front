import React from 'react';
import { useLocation } from 'react-router-dom';
import { SidebarLinkProps } from '../../types/custom/Sidebar';
import SidebarLink from '../atoms/SidebarLink';

export default function SidebarLinks({
  links,
  isRight,
  className = '',
}: {
  links: SidebarLinkProps[];
  isRight?: boolean;
  className?: string;
}) {
  const location = useLocation();
  let activeIndexAuto = links.findIndex((link) =>
    location.pathname.startsWith(link.to)
  );

  return (
    <>
      {links.map((link, i) => (
        <SidebarLink
          key={i}
          title={link.title}
          to={link.to}
          iconLink={link.iconLink}
          active={activeIndexAuto === i}
          fontSize={link.fontSize}
          fontWeight={isRight ? 'normal' : 'medium'}
          isRight={isRight}
          className={className}
        />
      ))}
    </>
  );
}
