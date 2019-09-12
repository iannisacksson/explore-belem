import React from 'react';

import { View, Text, Image } from 'react-native';

import TitleSecundary from '../../components/TitleSecundary';
import TabBar from '../../components/TabBar';

import Igara from '../../assets/image/igara.png';

import styles from './styles';

const ForgotPassword = () => (
  <>
    <View style={styles.container}>
      <TitleSecundary title="Salvos nos favoritos" />
      <View style={styles.favoritePlace}>
        <View style={styles.containerPhotos}>
          <Image style={styles.photo} source={Igara} />
          <Text style={styles.namePlace}>Cumbu</Text>
          <Text style={styles.nameCity}>Belém</Text>
        </View>
        <View style={styles.containerPhotos}>
          <Image style={styles.photo} source={Igara} />
          <Text style={styles.namePlace}>Cumbu</Text>
          <Text style={styles.nameCity}>Belém</Text>
        </View>
        <View style={styles.containerPhotos}>
          <Image style={styles.photo} source={Igara} />
          <Text style={styles.namePlace}>Cumbu</Text>
          <Text style={styles.nameCity}>Belém</Text>
        </View>
      </View>
    </View>
    <TabBar />
  </>
);

export default ForgotPassword;
