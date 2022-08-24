import useSWR from 'swr';
import {
  EpisodeResult,
  genericError,
  getAllPeopleResult,
  getAllShowResult,
  personShows,
} from './types';

export default async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

export const useGetAllSeries = (text: string) => {
  const {data, error} = useSWR<getAllShowResult[], genericError>(
    `https://api.tvmaze.com/search/shows?q=${text}`,
    fetcher,
  );

  return {
    shows: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const useGetPeople = (text: string) => {
  const {data, error} = useSWR<getAllPeopleResult[], genericError>(
    `https://api.tvmaze.com/search/people?q=${text}`,
    fetcher,
  );

  return {
    people: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const useGetPersonShows = (id: string) => {
  const {data, error} = useSWR<personShows[], genericError>(
    `https://api.tvmaze.com/people/${id}/castcredits?embed=show`,
    fetcher,
  );

  return {
    shows: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const useGetShowEpisodes = (showId: string) => {
  const {data, error} = useSWR<EpisodeResult[], genericError>(
    `https://api.tvmaze.com/shows/${showId}/episodes?specials=1`,
    fetcher,
  );

  return {
    episodes: data,
    isLoading: !error && !data,
    isError: error,
  };
};

//
//
//
//
//
// export const useSearchShowDetail = () => {
//   const {data, error} = useSWR<YourDataType, YourErrorType>('', fetcher);
//
//   return {
//     show: data,
//     isLoading: !error && !data,
//     isError: error,
//   };
// };
//

//
// export const useSearchEpisodeDetail = () => {
//   const {data, error} = useSWR<YourDataType, YourErrorType>('', fetcher);
//
//   return {
//     episode: data,
//     isLoading: !error && !data,
//     isError: error,
//   };
// };
//
//
