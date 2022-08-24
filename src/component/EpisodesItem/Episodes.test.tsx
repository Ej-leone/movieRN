import {render} from '@testing-library/react-native';
import {EpisodesItem} from './Episodes.component';
import React from 'react';

describe('Episode  Component', () => {
  test('should render wwithout an error ', () => {
    render(<EpisodesItem />);
  });
});
