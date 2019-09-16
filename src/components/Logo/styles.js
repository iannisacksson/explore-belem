import styled from 'styled-components/native';
import { colors } from '~/styles';

export const Container = styled.View`
  height: 200px;
  justify-content: center;
  align-items: center;
  background: ${colors.primary};
  border-bottom-left-radius: 150;
  border-bottom-right-radius: 150;
`;

export const LImage = styled.Image`
  width: 97;
  height: 100;
`;
