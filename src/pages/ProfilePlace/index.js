import React from 'react';

import { View, Text, Image, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import TitleSecundary from '../../components/TitleSecundary';
import TabBar from '../../components/TabBar';

import Igara from '../../assets/image/igara.png';

import styles from './styles';

const ProfilePlace = () => (
  <>
    <View style={styles.container}>
      <TitleSecundary title="Igara - Circuito Gastronomico" />

      <View style={styles.section}>
        <View style={styles.titleSection}>
          <View style={styles.address}>
            <Icon style={styles.iconMap} name="map-marker" />
            <Text style={styles.location}>Ilha de Cumbu, Belém</Text>
          </View>
          <TouchableOpacity>
            <Icon style={styles.heart} name="heart" />
          </TouchableOpacity>
        </View>

        <Image style={styles.imageMain} source={Igara} />

        <Text style={styles.content}>
          O Circuito é promovido pela Prefeitura de Belém por meio da Companhia
          de Desenvolvimento e Administração da Área Metropolitana de Belém
        </Text>
      </View>
    </View>
    <TabBar />
  </>
);

export default ProfilePlace;
