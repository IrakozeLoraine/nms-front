import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TabProps } from '../../types/custom/Tabs';
import Button from './Button';

export default function Tab({ tabs, onTabChange, children }: TabProps) {
  const navigate = useNavigate();

  let activeTabIndex = tabs.findIndex(
    (tab) => tab.href.split('?')[0] === location.pathname.split('?')[0]
  );
  if (activeTabIndex === -1) {
    let competitotors = tabs.filter((tab) =>
      location.pathname.startsWith(tab.href)
    );
    const arrays = competitotors.map((tab) => tab.href.split('/'));

    let maxIndex = 0;

    for (let i = 0; i < arrays.length; i++) {
      if (arrays[i].length) maxIndex = i;
    }

    try {
      activeTabIndex = tabs.findIndex(
        (tab) => tab.href === arrays[maxIndex].join('/')
      );
    } catch (error) {
      activeTabIndex = 0;
    }
  }

  const slideTo = (index: number, href: string, label: string) => {
    if (onTabChange)
      onTabChange({
        activeTabIndex: index,
        activeTabLabel: label,
      });
    navigate(href);
  };

  return (
    <div className="pb-12">
      <div className="flex justify-center items-center">
        {tabs.map((tab, i) => (
          <Button
            key={i}
            roundedLg={false}
            className={`m-0  text-sm font-normal uppercase border-none rounded-md ${
              activeTabIndex === i ? 'bg-primary' : 'bg-secondary-300'
            } ${activeTabIndex == i ? 'text-main' : 'text-txt-primary'}`}
            onClick={() => slideTo(i, tab.href, tab.label)}
          >
            {tab.label}
          </Button>
        ))}
      </div>
      {children}
    </div>
  );
}
