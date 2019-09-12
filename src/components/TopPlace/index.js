import React from 'react';

import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';

import TitleSection from '../TitleSection';

import Combu from '../../assets/image/combu.png';
import Cutijuba from '../../assets/image/cutijuba.png';
import Mosqueiro from '../../assets/image/mosqueiro.png';

import styles from './styles';

const TopPlace = ({ navigation }) => (
  <View>
    <TitleSection title="Populares na cidade" />

    <ScrollView
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scroll}
      horizontal
    >
      <View style={styles.componentView}>
        <Image style={styles.imageView} source={Combu} />
        <Text style={styles.namePlace}>Combu</Text>
        <Text style={styles.nameCity}>Belém</Text>
      </View>
      <View style={styles.componentView}>
        <TouchableOpacity>
          <Image style={styles.imageView} source={Cutijuba} />
          <Text style={styles.namePlace}>Cotijuba</Text>
          <Text style={styles.nameCity}>Belém</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.componentView}>
        <Image style={styles.imageView} source={Mosqueiro} />
        <Text style={styles.namePlace}>Mosqueiro</Text>
        <Text style={styles.nameCity}>Belém</Text>
      </View>
    </ScrollView>
  </View>
);

export default TopPlace;
