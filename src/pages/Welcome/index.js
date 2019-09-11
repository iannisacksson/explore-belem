import React from 'react';

import { View, Text, TouchableOpacity, Image } from 'react-native';

import Logo from '../../assets/logo.png';

import styles from './styles';

const Welcome = ({ navigation }) => (
  <View style={styles.container}>
    <Image style={styles.logo} source={Logo} />

    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('login')}
    >
      <Text style={styles.buttonText}>Entrar</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Criar Conta</Text>
    </TouchableOpacity>
  </View>
);

export default Welcome;
