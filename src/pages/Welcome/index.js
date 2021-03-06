import React from 'react';

import { View, Text, TouchableOpacity, Image } from 'react-native';

import PropTypes from 'prop-types';

import Logo from '~/assets/logo.png';

import styles from './styles';

const Welcome = ({ navigation }) => (
  <View style={styles.container}>
    <Image style={styles.logo} source={Logo} />

    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('Login')}
    >
      <Text style={styles.buttonText}>Entrar</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('Register')}
    >
      <Text style={styles.buttonText}>Criar Conta</Text>
    </TouchableOpacity>
  </View>
);

Welcome.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Welcome;
