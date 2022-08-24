import {FlashList} from '@shopify/flash-list';
import React, {FC} from 'react';

import {useRetreiveFavourites} from '../../utils';
import {Title} from '../../component/Typography';
import {ShowItem} from '../../component';
import {useNavigation} from '@react-navigation/native';

export const FavouriteScreen: FC<{}> = () => {
  const shows = useRetreiveFavourites();
  const navigate = useNavigation();

  return (
    <>
      <Title> {'Favourite  Shows'} </Title>
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
    </>
  );
};
