import {render} from '@testing-library/react-native';
import React from 'react';
import {FavouriteScreen} from './Favourite.screen';

describe('Episode  Component', () => {
  test('should render wwithout an error ', () => {
    render(<FavouriteScreen />);
  });
});
