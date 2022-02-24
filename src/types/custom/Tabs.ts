import { ReactNode } from 'react';
export interface TabProps {
  tabs: TabType[];
  onTabChange?: (e: TabEventType) => void;
  children: ReactNode;
}

type TabEventType = {
  activeTabIndex: number;
  activeTabLabel: string;
};

export type TabType = {
  label: string;
  href: string;
};
