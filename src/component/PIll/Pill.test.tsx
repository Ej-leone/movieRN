import {render} from '@testing-library/react-native';
import {PillComponent} from './Pill.component';
import React from 'react';

describe('Episode  Component', () => {
  test('should render wwithout an error ', () => {
    render(<PillComponent />);
  });
});
