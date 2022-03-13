import { BarMoleculeType } from '../../types';
import Download from '../../public/icons/download.svg';
import PaperPage from '../../layout/PaperPage';
import { TabType } from '../../types/custom/Tabs';

export default function Accessed() {
  const tabs: TabType[] = [
    {
      label: 'Recently uploaded',
      href: `/dashboard/recent-uploads`,
    },
    {
      label: 'Recently accessed',
      href: `/dashboard/recent-access`,
    },
  ];
  const recentUploads: BarMoleculeType[] = [
    {
      courseTitle: 'Project Management',
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
      courseTitle: 'English',
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
