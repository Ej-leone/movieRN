import AsyncStorage from '@react-native-async-storage/async-storage';
import {getAllShowResult} from '../network/types';

export const addSeriesInFavouriteList = async (value: getAllShowResult) => {
  const saved = await AsyncStorage.getItem('fav_Series');
  const parsedSaved = saved ? JSON.parse(saved) : [];
  const updated = parsedSaved.push(value);
  await AsyncStorage.setItem('fav_Series', JSON.stringify(updated));
};

// export const deleteSeriesInFavouriteList = async jsonValue => {
//   //retreive  all the series
//   // make an array then store itafter stringify
//   await AsyncStorage.setItem('fav_Series', jsonValue);
// };

const getFavouriteSeries = async (): Promise<getAllShowResult[]> => {
  const result = await AsyncStorage.getItem('fav_Series');
  return result ? JSON.parse(result) : [];
};

export const useRetreiveFavourites = async () => {
  const shows = await getFavouriteSeries();

  return {
    shows,
  };
};
