import React from 'react';
import Tab from '../components/atoms/Tab';
import BarsHolder from '../components/organisms/BarsHolder';
import Dashboard from '../layout/Dashboard';
import { TabType } from '../types/custom/Tabs';
import Download from '../public/icons/download.svg';
import { BarMoleculeType } from '../types';

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

  const recentUploads: BarMoleculeType[] = [
    {
      courseTitle: 'Physics',
      notes: [
        {
          mainNote: 'Kinematics',
          subnotes: ['Graph', 'Exercises'],
        },
        {
          mainNote: 'Dynamics',
          subnotes: ['Momentum', 'Exercises'],
        },
      ],
    },
    {
      courseTitle: 'Maths',
      notes: [
        {
          mainNote: 'Kinematics',
          subnotes: ['Graph', 'Exercises'],
        },
        {
          mainNote: 'Dynamics',
          subnotes: ['Momentum', 'Exercises'],
        },
      ],
    },
  ];
  return (
    <Dashboard showSearch>
      <div className="block relative w-full h-auto px-11">
        <div className="bg-main px-24 py-8 h-full ">
          <Tab tabs={tabs}>
            <BarsHolder content={recentUploads} iconImg={Download} />
          </Tab>
        </div>
      </div>
    </Dashboard>
  );
}
