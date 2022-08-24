import React, {FC} from 'react';
import {ActorContainer, ActorImage} from './PeopleItem.style';
import {TouchableOpacity} from 'react-native';
import {getAllPeopleResult} from '../../network/types';
import {SubTitle} from '../Typography';

interface PeopleItemProp {
  actor: getAllPeopleResult;
  onActorPress: () => void;
}

export const PeopleItem: FC<PeopleItemProp> = ({onActorPress, actor}) => {
  const imageUri =
    actor.person.image?.medium ||
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';
  return (
    <TouchableOpacity onPress={onActorPress}>
      <ActorContainer>
        <ActorImage
          source={{
            uri: imageUri,
          }}
        />
        <SubTitle> {actor.person.name}</SubTitle>
      </ActorContainer>
    </TouchableOpacity>
  );
};
