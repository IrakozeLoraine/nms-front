import { ReactNode } from 'react';

export interface HeaderProps {
  showSearch?: boolean;
  handleSearch?: () => {};
  searchname?: string;
  searchvalue?: string;
}
export interface DashboardProps extends HeaderProps {
  children: ReactNode;
}
