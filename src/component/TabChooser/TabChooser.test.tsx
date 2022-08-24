import {render} from '@testing-library/react-native';
import {TabChooser} from './TabChooser';
import React, {FC} from 'react';

describe('TabChoose  Component', () => {
  test('should render without an error ', () => {
    render(<TabChooser />);
  });
});
