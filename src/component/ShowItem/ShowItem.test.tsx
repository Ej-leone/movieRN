import {render} from '@testing-library/react-native';
import {ShowItem} from './ShowItem.component';
import React, {FC} from 'react';

describe('Episode  Component', () => {
  test('should render wwithout an error ', () => {
    render(
      <ShowItem
        onShowPress={() => {
          //intentional
        }}
      />,
    );
  });
});
