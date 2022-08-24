import {FlashList} from '@shopify/flash-list';
import React, {FC, useState} from 'react';
import {PeopleItem, ShowItem, SearchBar} from '../../component';
import {useGetAllSeries, useGetPeople} from '../../network';
import {useNavigation} from '@react-navigation/native';

import {Title} from '../../component/Typography';

export const MainScreen: FC = () => {
  const [searchText, setSearchText] = useState('ba');
  const navigate = useNavigation();
  const {shows} = useGetAllSeries(searchText);
  const {people} = useGetPeople(searchText);

  return (
    <>
      <SearchBar text={searchText} setText={setSearchText} />
      <Title> {'People'} </Title>
      {people && (
        <FlashList
          horizontal
          data={people}
          renderItem={({item}) => (
            <PeopleItem
              actor={item}
              onActorPress={() =>
                navigate.navigate('People', {actor: item.person})
              }
            />
          )}
          estimatedItemSize={40}
        />
      )}
      <Title> {'TV Shows'} </Title>
      {shows && (
        <FlashList
          data={shows}
          numColumns={2}
          renderItem={({item}) => (
            <ShowItem
              show={item}
              onShowPress={() => navigate.navigate('Show', {show: item.show})}
            />
          )}
          estimatedItemSize={100}
        />
      )}
    </>
  );
};
