import React, {FC} from 'react';
import {ShowItemCotainer, ShowItemImage} from './ShowItem.style';
import {TouchableOpacity} from 'react-native';
import {getAllShowResult} from '../../network/types';
import {SubTitle} from '../Typography';

interface ShowItemProps {
  show: getAllShowResult;
  onShowPress: () => void;
}

export const ShowItem: FC<ShowItemProps> = ({onShowPress, show}) => {
  const imageUri =
    show.show.image?.medium ||
    'https://cdn.pixabay.com/photo/2013/07/12/13/56/film-reel-147631_1280.png';
  return (
    <TouchableOpacity onPress={onShowPress}>
      <ShowItemCotainer>
        <ShowItemImage
          source={{
            uri: imageUri,
          }}
        />
        <SubTitle> {show.show.name}</SubTitle>
      </ShowItemCotainer>
    </TouchableOpacity>
  );
};
