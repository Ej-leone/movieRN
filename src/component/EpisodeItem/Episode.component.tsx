import React, {FC} from 'react';
import {ContentText, SubTitle} from '../Typography';
import {EpisodeImage} from './Episode.style';

interface EpisodeComponentProps {
  episode: any;
}

export const EpisodeItem: FC<EpisodeComponentProps> = ({episode}) => {
  const imageUri =
    episode?.image.medium ||
    'https://cdn.pixabay.com/photo/2013/07/12/13/56/film-reel-147631_1280.png';

  return (
    <>
      <EpisodeImage
        source={{
          uri: imageUri,
        }}
      />
      <SubTitle> {'Name'}</SubTitle>
      <ContentText>{episode.name}</ContentText>

      <SubTitle> {'Number'}</SubTitle>
      <ContentText>{episode.number}</ContentText>

      <SubTitle> {'Season'}</SubTitle>
      <ContentText>{episode.season}</ContentText>

      <SubTitle> {'Summary '}</SubTitle>
      <ContentText>{episode.summary?.replace(/(<([^>]+)>)/gi, '')}}</ContentText>

      <SubTitle> {'Air Date'}</SubTitle>
      <ContentText>{episode.airdate}</ContentText>
    </>
  );
};
