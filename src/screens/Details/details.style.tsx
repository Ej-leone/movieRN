import styled from 'styled-components/native';
import {Image, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

export const DetailsContainer = styled.View`
  width: ${width}px;
  height: ${height}px;
`;

export const DetailImage = styled(Image)`
  width: ${width}px;
  height: ${height / 3}px;
`;
