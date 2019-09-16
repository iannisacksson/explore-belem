import React, { useRef, useState } from 'react';
import { StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';

import Logo from '~/components/Logo';
import { signInRequest } from '~/store/modules/auth/actions';

import {
  Container,
  Form,
  Title,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
  Footer,
  Register,
  Question,
} from './styles';

import { colors } from '~/styles';

export default function SignIn({ navigation }) {
  const dispatch = useDispatch();
  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <Logo />
      <Container>
        <Form>
          <Title>Entre</Title>
          <FormInput
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="E-mail"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />

          <FormInput
            secureTextEntry
            placeholder="Senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />

          <SubmitButton onPress={handleSubmit}>Entrar</SubmitButton>
        </Form>

        <Footer>
          <SignLink onPress={() => {}}>
            <SignLinkText>Esqueceu sua senha?</SignLinkText>
          </SignLink>
          <Register>
            <Question>Não tem uma conta?</Question>
            <SignLink onPress={() => navigation.navigate('SignUp')}>
              <SignLinkText>Registre-se</SignLinkText>
            </SignLink>
          </Register>
        </Footer>
      </Container>
    </>
  );
}

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
