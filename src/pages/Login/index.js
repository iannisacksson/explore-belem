import React from 'react';

import {
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';

import Logo from '../../assets/ararararaCOLOR-1.png';

import { colors } from '../../styles/index';

const Login = () => (
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
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>

    <View style={styles.footer}>
      <Text style={styles.forgot}>Esqueceu sua senha?</Text>

      <View style={styles.containerRegister}>
        <Text style={styles.textAccount}>Não tem uma conta?</Text>
        <Text style={styles.linkRegister}> Registre-se</Text>
      </View>
    </View>

  </View>
);

export default Login;
