import React from 'react';
import {render} from '@testing-library/react-native';
import {SearchBar} from './SearchBar.component';

describe('Episode  Component', () => {
  test('should render wwithout an error ', () => {
    render(<SearchBar />);
  });
});
