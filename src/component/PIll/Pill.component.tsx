import React, {FC} from 'react';
import {PillContainer} from './Pill.style';
import {Paragraph} from '../Typography';

interface PillComponentProps {
  text: string;
}

export const PillComponent: FC<PillComponentProps> = ({text}) => {
  return (
    <PillContainer>
      <Paragraph> {text}</Paragraph>
    </PillContainer>
  );
};
