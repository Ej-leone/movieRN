import React, {Dispatch, FC, SetStateAction} from 'react';
import {Tab} from './TabChooser.style';
import {SubTitle} from '../Typography';

interface TabItemProps {
  text: string;
  active: boolean;
  onClick: Dispatch<SetStateAction<string>>;
}

export const TabItem: FC<TabItemProps> = ({text, onClick}) => {
  return (
    <Tab key={text} onPress={() => onClick(text)}>
      <SubTitle> {text}</SubTitle>
    </Tab>
  );
};
