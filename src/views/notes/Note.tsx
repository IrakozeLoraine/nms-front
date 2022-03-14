import { BarMoleculeType } from '../../types';
import { TabType } from '../../types/custom/Tabs';
import Download from '../../public/icons/download.svg';
import PaperPage from '../../layout/PaperPage';

export default function Note() {
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
  return <PaperPage tabs={tabs} content={notes} iconImg={Download} />;
}
