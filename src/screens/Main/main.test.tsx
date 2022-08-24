import {render} from '@testing-library/react-native';
import {MainScreen} from './main.screen';
import React, {FC} from 'react';

describe('Main Screen ', () => {
  test('should render wwithout an error ', () => {
    render(<MainScreen />);
  });
});
