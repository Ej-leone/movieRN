import React, {FC, useState, useRef, useMemo, useCallback} from 'react';
import {FlatList, Pressable, Text, View} from 'react-native';
import {DetailImage, DetailsContainer} from './details.style';
import {AboutShowComponent} from '../../component/ShowItem/AboutShow.component';
import {EpisodeItem, EpisodesItem} from '../../component';
import BottomSheet from '@gorhom/bottom-sheet';

import {TabChooser} from '../../component';
import {useGetShowEpisodes} from '../../network';

export const DetailsScreen: FC = ({route}) => {
  const {show} = route.params;
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [state, setState] = useState<string>('about'); //'about' | 'episodes'
  const bottomSheetRef = useRef<BottomSheet>(null);

  const {episodes} = useGetShowEpisodes(show.id);

  const snapPoints = useMemo(() => ['1%', '70%'], []);

  const selectEpisode = episode => {
    bottomSheetRef.current?.snapToIndex(1);
    setSelectedEpisode(episode);
  };

  const closeModal = () => {
    bottomSheetRef.current?.snapToIndex(0);
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

      <BottomSheet
        enablePanDownToClose={true}
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}>
        <View
          style={{
            flex: 1,

          }}>
          <Pressable onPress={closeModal}>
            <Text>X</Text>
          </Pressable>
          {selectedEpisode ? <EpisodeItem episode={selectedEpisode} /> : null}
        </View>
      </BottomSheet>
    </DetailsContainer>
  );
};
