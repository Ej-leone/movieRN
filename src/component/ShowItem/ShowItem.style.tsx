import styled from 'styled-components/native';
import {Image, Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

export const ShowItemCotainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`;

export const ShowItemImage = styled(Image)`
  height: ${width / 2 - 5}px;
  width: ${width / 2 - 5}px;
`;

export const AboutContainer = styled.View``;

interface ShowStatusProps {
  state: string;
}

export const ShowStatus = styled.Text<ShowStatusProps>`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 15px;
  padding: 5px;
  color: white;
  background-color: ${({state}: ShowStatusProps) =>
    state === 'Running' ? 'green' : 'red'};
`;
