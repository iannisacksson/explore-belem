import React from 'react';

import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';

import Logo from './assets/ararararaCOLOR-1.png';

import styles, { Colors } from './styles';


const App = () => (
  <View style={styles.container}>
    <Image style={styles.logo} source={Logo} />

    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Entrar</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Criar Conta</Text>
    </TouchableOpacity>
  </View>
);

export default App;
