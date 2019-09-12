import React from 'react';

import { View, Text, Image, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import Igara from '../../assets/image/igara.png';

import styles from './styles';

const ProfilePlace = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.title}>Igara - Circuito Gastronomico</Text>
      <TouchableOpacity>
        <Icon style={styles.back} name="arrow-left" />
      </TouchableOpacity>
    </View>
    <View>
      <View>
        <Icon name="map-marker" />
        <Text>Ilha de Cumbu, Belém</Text>
      </View>

      <Icon name="heart" />

      <Image source={Igara} />

      <Text>
        O Circuito é promovido pela Prefeitura de Belém por meio da Companhia de
        Desenvolvimento e Administração da Área Metropolitana de Belém
      </Text>
    </View>
  </View>
);

export default ProfilePlace;
