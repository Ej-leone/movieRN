import {render} from '@testing-library/react-native';
import React from 'react';
import {PersonScreen} from './person.screen';

describe('Person Screen ', () => {
  test('should render wwithout an error ', () => {
    render(
      <PersonScreen
        route={{
          params: {},
        }}
      />,
    );
  });
});
