import React from 'react';

import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';

import Logo from './assets/ararararaCOLOR-1.png';

import styles from './styles';


const App = () => (
  <View style={styles.container}>
    <View style={styles.containerLogo}>
      <Image style={styles.logo} source={Logo} />
    </View>

    <View style={styles.containerButtons}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Criar Conta</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default App;
