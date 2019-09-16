import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { StatusBar } from 'react-native';
// import PropTypes from 'prop-types';

import {
  Container,
  Form,
  Title,
  FormInput,
  SubmitButton,
  ContainerLogo,
  SignLink,
  SignLinkText,
} from './styles';

import { colors } from '~/styles';

export default function SignUp({ navigation }) {
  const emailRef = useRef();
  const passwordRef = useRef();

  function handleSubmit() {}

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.secundary} />
      <ContainerLogo />
      <Container>
        <Form>
          <Title>Crie sua conta</Title>
          <FormInput
            autoCorrect={false}
            placeholder="Digite seu nome"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
          />
          <FormInput
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />

          <FormInput
            secureTextEntry
            placeholder="Senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />

          <SubmitButton onPress={handleSubmit}>Entrar</SubmitButton>
        </Form>
        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignLinkText>Já tenho conta</SignLinkText>
        </SignLink>
      </Container>
    </>
  );
}

SignUp.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
