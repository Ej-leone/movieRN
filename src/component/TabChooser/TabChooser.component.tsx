import React, {Dispatch, FC, SetStateAction} from 'react';
import {TabChooserContainer} from './TabChooser.style';
import {TabItem} from './Tab.component';

interface TabChooserProps {
  tabs: string[];
  activetab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

export const TabChooser: FC<TabChooserProps> = ({
  tabs,
  setActiveTab,
  activetab,
}) => {
  return (
    <TabChooserContainer>
      {tabs.map(tab => (
        <TabItem
          key={tab}
          text={tab}
          active={tab === activetab}
          onClick={setActiveTab}
        />
      ))}
    </TabChooserContainer>
  );
};
