import {Image} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const AboutContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const PersonImage = styled(Image)`
  width: 200px;
  height: 200px;
  border-radius: 100px;
`;

export const PersonName = styled.Text`
  font-size: 45px;
  font-weight: 600;
`;
