import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarLinkProps } from '../../types/custom/Sidebar';
import ellipse from '../../public/icons/ellipse.svg';
import leftArrow from '../../public/icons/left-arrow.svg';

export default function SidebarLink({
  to,
  iconLink,
  title,
  active,
  fontSize = 'base',
  isRight = false,
  transformText = 'capitalize',
  fontWeight = 'medium',
  className = '',
}: SidebarLinkProps) {
  return (
    <div
      className={`px-8 cursor-pointer py-0 bg-primary text-main ${className}`}
    >
      <Link
        to={to}
        className={`flex items-center  ${
          isRight ? 'gap-4 pb-4' : 'gap-8 pb-6'
        }`}
      >
        {active && isRight && <img src={leftArrow} alt="" />}
        {iconLink && <img src={iconLink} alt="" />}
        <span
          className={`text-main text-${fontSize} px-1 font-${fontWeight} ${transformText}`}
        >
          {title}
        </span>
        {active && !isRight && <img src={ellipse} alt="" />}
      </Link>
    </div>
  );
}