import React, {FC, useState, useRef, useMemo, useCallback} from 'react';
import {FlatList, Text, View} from 'react-native';
import {DetailImage, DetailsContainer} from './details.style';
import {AboutShowComponent} from '../../component/ShowItem/AboutShow.component';
import {EpisodeItem, EpisodesItem} from '../../component';
import BottomSheet from '@gorhom/bottom-sheet';
import {addSeriesInFavouriteList} from '../../utils';
import {TabChooser} from '../../component';
import {useGetShowEpisodes} from '../../network';

export const DetailsScreen: FC = ({route}) => {
  const {show} = route.params;
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [state, setState] = useState<string>('about'); //'about' | 'episodes'
  const bottomSheetRef = useRef<BottomSheet>(null);

  const addToFav = useCallback(addSeriesInFavouriteList, []);
  const {episodes} = useGetShowEpisodes(show.id);
  // variables
  const snapPoints = useMemo(() => ['1%', '70%'], []);

  const selectEpisode = episode => {
    bottomSheetRef.current?.snapToIndex(1);
    setSelectedEpisode(episode);
  };

  return (
    <DetailsContainer>
      <DetailImage
        source={{
          uri: show.image?.medium,
        }}
      />
      <TabChooser
        tabs={['about', 'episodes']}
        activetab={state}
        setActiveTab={setState}
      />
      {state === 'about' ? (
        <AboutShowComponent show={show} />
      ) : (
        <FlatList
          data={episodes}
          renderItem={({item}) => (
            <EpisodesItem episode={item} onPress={selectEpisode} />
          )}
        />
      )}

      <BottomSheet ref={bottomSheetRef} index={0} snapPoints={snapPoints}>
        <View
          style={{
            flex: 1,
            padding: 24,
          }}>
          {selectedEpisode ? <EpisodeItem episode={selectedEpisode} /> : null}
        </View>
      </BottomSheet>
    </DetailsContainer>
  );
};
