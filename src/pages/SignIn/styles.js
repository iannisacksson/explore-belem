import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

import { metrics } from '~/styles';

export const Container = styled.View`
  flex: 1;
  margin: ${metrics.baseMargin}px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: ${metrics.baseMargin}px;
`;

export const FormInput = styled(Input)`
  margin-bottom: ${metrics.baseMargin}px;
`;

export const SubmitButton = styled(Button)`
  margin-top: ${metrics.baseMargin}px;
  align-self: flex-end;
`;

export const Footer = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: ${metrics.basePadding}px 0;
`;

export const SignLink = styled.TouchableOpacity``;

export const SignLinkText = styled.Text`
  color: #78d1e5;
  font-size: 16px;
`;

export const Register = styled.View`
  flex-direction: row;
`;

export const Question = styled.Text`
  font-size: 16px;
  padding-right: 3px;
`;
