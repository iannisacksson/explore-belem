import React from 'react';

import { View, Text, Image, TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import Logo from '../../assets/logo.png';
import styles from './styles';
import { colors } from '../../styles';

const Home = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <View style={styles.nameApp}>
        <Image style={styles.logo} source={Logo} />
        <Text style={styles.text}>Explore Belém</Text>
      </View>
      <View style={styles.iconContainer}>
        <Icon style={styles.icon} name="comment" />
        <Icon style={styles.icon} name="calendar" />
        <Icon style={styles.icon} name="bell" />
      </View>
    </View>
    <View style={styles.search}>
      <Icon style={styles.iconSearch} name="search" />
      <TextInput
        autoCorrect={false}
        placeholder="Buscar"
        placeholderTextColor={colors.fontInput}
        style={styles.input}
      />
      <Icon style={styles.iconMicrophone} name="microphone" />
    </View>
    <View>
      <Text>Populares na cidade</Text>
      <Text>Ver Tudo</Text>
    </View>
  </View>
);

export default Home;
