import React from 'react';
import Tab from '../components/atoms/Tab';
import BarsHolder from '../components/organisms/BarsHolder';
import { BarMoleculeType } from '../types';
import { TabType } from '../types/custom/Tabs';

interface IPaperPage {
  tabs: TabType[];
  content: BarMoleculeType[];
  iconImg?: string;
}

export default function PaperPage({ tabs, content, iconImg }: IPaperPage) {
  return (
    <div className="block relative w-full h-auto px-11">
      <div className="bg-main px-24 py-8 h-full ">
        <Tab tabs={tabs}>
          <BarsHolder content={content} iconImg={iconImg} />
        </Tab>
      </div>
    </div>
  );
}
