import React from 'react';
import Tab from '../components/atoms/Tab';
import PopupMolecule from '../components/molecule/PopupMolecule';
import Dashboard from '../layout/Dashboard';
import { TabType } from '../types/custom/Tabs';

export default function Home() {
  const tabs: TabType[] = [
    {
      label: 'Recently uploaded',
      href: `/dashboard/home`,
    },
    {
      label: 'Recently accessed',
      href: `/dashboard/notes`,
    },
  ];
  return (
    <Dashboard showSearch>
      <div className="block relative w-full h-auto px-11">
        <div className="bg-main px-24 py-8 h-screen">
          <Tab tabs={tabs}>
            <PopupMolecule/>
          </Tab>
          
        </div>
      </div>
    </Dashboard>
  );
}
