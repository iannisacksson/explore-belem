import React, { useRef } from 'react';
import { StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import Logo from '~/components/Logo';

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
  const passwordRef = useRef();

  function handleSubmit() {}

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
            placeholder="Digite seu e-mail"
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
