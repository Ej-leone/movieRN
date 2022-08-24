import React from 'react';
import {render} from '@testing-library/react-native';
import {DetailsScreen} from './details.screen';

describe('Episode  Component', () => {
  test('should render wwithout an error ', () => {
    render(<DetailsScreen />);
  });
});
