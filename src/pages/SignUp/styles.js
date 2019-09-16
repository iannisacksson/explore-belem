import styled from 'styled-components/native';

import Logo from '~/components/Logo';
import Input from '~/components/Input';
import Button from '~/components/Button';

import { metrics, colors } from '~/styles';

export const ContainerLogo = styled(Logo)`
  background: ${colors.secundary};
`;

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
  background: ${colors.secundary};
  margin-top: ${metrics.baseMargin}px;
  align-self: flex-end;
`;

export const SignLink = styled.TouchableOpacity`
  align-items: center;
  margin-top: 30px;
`;

export const SignLinkText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
