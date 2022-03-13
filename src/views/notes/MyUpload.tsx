import React from 'react';
import Tab from '../../components/atoms/Tab';
import BarsHolder from '../../components/organisms/BarsHolder';
import Dashboard from '../../layout/Dashboard';
import { BarMoleculeType } from '../../types';
import { TabType } from '../../types/custom/Tabs';
import Download from '../../public/icons/download.svg';

export default function MyUpload() {
  const tabs: TabType[] = [
    {
      label: 'Notes',
      href: `/dashboard/notes`,
    },
    {
      label: 'My Uploads',
      href: `/dashboard/my-uploads`,
    },
    {
      label: 'Upload',
      href: `/dashboard/notes`,
    },
  ];
  const notes: BarMoleculeType[] = [
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
    <div className="block relative w-full h-auto px-11">
      <div className="bg-main px-24 py-8 h-full ">
        <Tab tabs={tabs}>
          <BarsHolder content={notes} iconImg={Download} />
        </Tab>
      </div>
    </div>
  );
}
