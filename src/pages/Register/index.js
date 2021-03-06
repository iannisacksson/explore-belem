import React from 'react';

import PropTypes from 'prop-types';

import {
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';

import Logo from '~/assets/logo.png';

import { colors } from '~/styles/index';

const Register = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.containerLogo}>
      <Image style={styles.logo} source={Logo} />
    </View>

    <KeyboardAvoidingView behavior="padding" style={styles.containerBody}>
      <Text style={styles.title}>Crie sua conta</Text>

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

      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Confirmar Senha"
        placeholderTextColor={colors.fontInput}
        style={styles.input}
        secureTextEntry
      />

      <View>
        <View style={styles.containerButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.buttonText}>Registrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  </View>
);

Register.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Register;
