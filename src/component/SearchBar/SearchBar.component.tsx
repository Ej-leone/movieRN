import React, {Dispatch, FC, SetStateAction} from 'react';
import {TextInput} from 'react-native';

interface SearchBarComponentProps {
  setText: Dispatch<SetStateAction<string>>;
  text: string;
}

export const SearchBar: FC<SearchBarComponentProps> = ({setText, text}) => {
  return (
    <TextInput placeholder="Search List" onChangeText={setText} value={text} />
  );
};
