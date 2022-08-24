import {FlashList} from '@shopify/flash-list';
import React, {FC} from 'react';
import {useGetPersonShows} from '../../network';
import {
  AboutContainer,
  Container,
  PersonImage,
  PersonName,
} from './person.style';
import {EpisodeItem, ShowItem} from '../../component';
import {SubTitle} from '../../component/Typography';

type ProfileScreenRouteProp = Props['route'];

interface PersonScreenProps {
  route: ProfileScreenRouteProp;
}

export const PersonScreen: FC<PersonScreenProps> = ({route}) => {
  const {actor} = route.params;
  const imageUri =
    actor.image?.medium ||
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';
  const {shows} = useGetPersonShows(actor.id);
  const filteredShows = shows?.map(show => ({
    show: show._embedded,
    score: 0.0,
  }));

  console.log({
    //actor,
    //filteredShows,
  });

  return (
    <Container>
      <AboutContainer>
        <PersonImage
          source={{
            uri: imageUri,
          }}
        />
        <PersonName> {actor.name}</PersonName>
        <SubTitle>{actor.gender} </SubTitle>
        <SubTitle>{actor.birthday} </SubTitle>
      </AboutContainer>

      {shows && (
        <FlashList
          data={filteredShows}
          numColumns={2}
          renderItem={({item}) => (
            <ShowItem
              show={item}
              onShowPress={() => {
                //intetional
              }}
            />
          )}
          estimatedItemSize={100}
        />
      )}
    </Container>
  );
};
