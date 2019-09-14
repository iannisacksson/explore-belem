import React from 'react';

import {
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';

import Logo from '../../assets/logo.png';

import { colors } from '../../styles/index';

const Login = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.containerLogo}>
      <Image style={styles.logo} source={Logo} />
    </View>

    <KeyboardAvoidingView style={styles.containerBody} behavior="padding">
      <Text style={styles.title}>Entre</Text>

      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="E-mail"
        placeholderTextColor={colors.fontInput}
        style={styles.input}
      />

      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Senha"
        placeholderTextColor={colors.fontInput}
        style={styles.input}
        secureTextEntry
      />

      <View style={styles.containerButton}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>

    <View style={styles.footer}>
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgot}>Esqueceu sua senha?</Text>
      </TouchableOpacity>
      <View style={styles.containerRegister}>
        <Text style={styles.textAccount}>Não tem uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.linkRegister}> Registre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Login;
