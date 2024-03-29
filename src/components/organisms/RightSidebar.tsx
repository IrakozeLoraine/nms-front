import { SidebarLinkProps } from '../../types/custom/Sidebar';
import SidebarLinks from '../molecule/SidebarLinks';

import Button from '../atoms/Button';
import Heading from '../atoms/Heading';

export default function RightSidebar() {
  const defaultLinks = () => {
    const links: SidebarLinkProps[] = [
      {
        title: 'Mathematics',
        to: '/dashboard/notes',
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
      <Heading
        fontSize="text-2xl"
        fontWeight="font-bold"
        color="text-main"
        className="pt-14 text-center uppercase"
      >
        Courses
      </Heading>
      <div className="mb-auto h-10">
        <div className={'py-12 '}>
          <SidebarLinks className="px-11" links={defaultLinks()} isRight />
        </div>

        <div className="flex items-center justify-center">
          <Button
            onClick={() => {}}
            hoverStyle="no-underline"
            className="px-3"
            bgColor="border-main"
            styleType="outline"
          >
            <span className={`text-main text-base font-medium uppercase`}>
              View all
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
