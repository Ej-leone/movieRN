export type genericError = {
  message: string;
};

type imageResult = {
  medium: string;
  original: string;
};

type personInitialResult = {
  id: number;
  name: string;
  image: imageResult;
};

type ScheduleType = {
  time: string;
  days: string[];
};

export type showInitialResult = {
  status: string;
  id: number;
  genres: string[];
  image: imageResult;
  summary: string;
  name: string;
  schedule: ScheduleType;
};
export type getAllShowResult = {
  score: number;
  show: showInitialResult;
};

export type getAllPeopleResult = {
  score: number;
  person: personInitialResult;
};

export type personShows = {
  _embedded: showInitialResult;
  voice: boolean;
  self: boolean;
};

export type EpisodeResult = {
  id: string;
  url: string;
  name: string;
  season: string;
  number: string;
  image: imageResult;
  summary: string;
};
