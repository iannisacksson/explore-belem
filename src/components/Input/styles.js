import styled from 'styled-components/native';
import { metrics, colors } from '~/styles';

export const Container = styled.View`
  padding: 0 15px;
  height: 46px;
  background-color: ${colors.input};
  border-radius: ${metrics.baseRadius}px;

  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: colors.content,
})`
  flex: 1;
  background-color: ${colors.input};
  font-size: 15px;
  margin-left: 10px;
  color: ${colors.dark};
`;
