import React from 'react';

import {
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';

import Logo from '../../assets/logo.png';

import styles from './styles';
import { colors } from '../../styles';

const ForgotPassword = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.containerLogo}>
      <Image style={styles.logo} source={Logo} />
    </View>

    <KeyboardAvoidingView behavior="height" style={styles.containerBody}>
      <Text style={styles.title}>
        Insira seu E-mail e enviaremos um link para renovar sua senha
      </Text>

      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="E-mail"
        placeholderTextColor={colors.fontInput}
        style={styles.input}
      />

      <View style={styles.containerButton}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  </View>
);

export default ForgotPassword;
