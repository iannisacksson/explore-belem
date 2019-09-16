import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { metrics, colors, fonts } from '~/styles';

export const Container = styled(RectButton)`
  padding: ${metrics.basePaddingButton}px;
  background: ${colors.primary};
  border-radius: ${metrics.baseRadius}px;
  width: 50%;

  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: ${colors.white};
  font-weight: bold;
  font-size: ${fonts.input}px;
`;
