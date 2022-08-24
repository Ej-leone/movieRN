import React, {FC} from 'react';
import {showInitialResult} from '../../network/types';
import {PillComponent} from '../PIll';
import {AboutContainer, ShowStatus} from './ShowItem.style';
import {Paragraph, Title, SubTitle} from '../Typography';
import {PillsContainer} from '../PIll/Pill.style';
import {ScrollView} from 'react-native';

interface AboutShowComponentProps {
  show: showInitialResult;
}

export const AboutShowComponent: FC<AboutShowComponentProps> = ({show}) => {
  return (
    <AboutContainer>
      <Title> {show.name} </Title>
      <ShowStatus state={show.status}> {show.status}</ShowStatus>
      <SubTitle> Days </SubTitle>
      <PillsContainer>
        {show.schedule.days.map((day: string) => (
          <PillComponent key={day} text={day} />
        ))}
      </PillsContainer>
      <SubTitle> Time </SubTitle>
      <Paragraph> {show.schedule.time} </Paragraph>
      <SubTitle> Genres </SubTitle>
      <PillsContainer>
        {show.genres.map((genre: string) => (
          <PillComponent key={genre} text={genre} />
        ))}
      </PillsContainer>
      <Paragraph>{show.summary?.replace(/(<([^>]+)>)/gi, '')} </Paragraph>
    </AboutContainer>
  );
};
