import {Content, Divider, EpisodesContainer} from './Episodes.style';
import React, {FC} from 'react';
import {ContentText, Paragraph, SubTitle} from '../Typography';
import {EpisodeResult} from '../../network/types';
import {TouchableOpacity} from 'react-native';

interface EpisodesComponentProps {
  episode: EpisodeResult;
  onPress: (episode) => void;
}

export const EpisodesItem: FC<EpisodesComponentProps> = ({
  episode,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={() => onPress(episode)}>
      <EpisodesContainer>
        <Content>
          <SubTitle> {'Name'}</SubTitle>
          <ContentText>{episode.name}</ContentText>
        </Content>

        <Content>
          <SubTitle> {'Season'}</SubTitle>
          <ContentText>{episode.season}</ContentText>
        </Content>

        <Divider />
      </EpisodesContainer>
    </TouchableOpacity>
  );
};
