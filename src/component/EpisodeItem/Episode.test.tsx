import {render} from '@testing-library/react-native';
import {EpisodeItem} from './Episode.component';
import React from 'react';

describe('Episode  Component', () => {
  test('should render wwithout an error ', () => {
    render(<EpisodeItem />);
  });
});
