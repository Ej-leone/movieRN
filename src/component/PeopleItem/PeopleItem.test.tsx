import {render} from '@testing-library/react-native';
import {PeopleItem} from './PeopleItem.component';
import React from 'react';

describe('Episode  Component', () => {
  test('should render wwithout an error ', () => {
    render(
      <PeopleItem
        actor={{
          score: 0.2,
          person: {
            id: 123,
            name: 'Test Name',
            image: {
              medium: '',
              original: '',
            },
          },
        }}
        onActorPress={() => {
          //intentional
        }}
      />,
    );
  });
});
