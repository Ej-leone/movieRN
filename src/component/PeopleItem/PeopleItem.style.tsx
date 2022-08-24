import styled from 'styled-components/native';
import {Image} from 'react-native';

export const ActorContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3px;
`;

export const ActorImage = styled(Image)`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;
