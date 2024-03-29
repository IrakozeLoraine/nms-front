import { TabType } from '../types/custom/Tabs';
import Download from '../public/icons/download.svg';
import { BarMoleculeType } from '../types';
import PaperPage from '../layout/PaperPage';

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
  return <PaperPage tabs={tabs} content={recentUploads} iconImg={Download} />;
}
