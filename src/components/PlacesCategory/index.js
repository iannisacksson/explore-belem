import React from 'react';

import { View, ScrollView, Image, Text } from 'react-native';

import TitleSection from '~/components/TitleSection';

import FeiraDoLivro from '~/assets/image/feiradolivro.png';

import styles from './styles';

const PlacesCategory = () => (
  <>
    <View>
      <TitleSection title="Eventos Culturais" />

      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
        horizontal
      >
        <View style={styles.componentView}>
          <Image style={styles.image} source={FeiraDoLivro} />
          <Text style={styles.namePlace}>Feira Do Livro</Text>
          <Text style={styles.nameCity}>Belém</Text>
        </View>
        <View style={styles.componentView}>
          <Image style={styles.image} source={FeiraDoLivro} />
          <Text style={styles.namePlace}>Feira Do Livro</Text>
          <Text style={styles.nameCity}>Belém</Text>
        </View>
        <View style={styles.componentView}>
          <Image style={styles.image} source={FeiraDoLivro} />
          <Text style={styles.namePlace}>Feira Do Livro</Text>
          <Text style={styles.nameCity}>Belém</Text>
        </View>
      </ScrollView>
    </View>
    <View>
      <TitleSection title="Eventos Culturais" />

      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
        horizontal
      >
        <View style={styles.componentView}>
          <Image style={styles.image} source={FeiraDoLivro} />
          <Text style={styles.namePlace}>Feira Do Livro</Text>
          <Text style={styles.nameCity}>Belém</Text>
        </View>
        <View style={styles.componentView}>
          <Image style={styles.image} source={FeiraDoLivro} />
          <Text style={styles.namePlace}>Feira Do Livro</Text>
          <Text style={styles.nameCity}>Belém</Text>
        </View>
        <View style={styles.componentView}>
          <Image style={styles.image} source={FeiraDoLivro} />
          <Text style={styles.namePlace}>Feira Do Livro</Text>
          <Text style={styles.nameCity}>Belém</Text>
        </View>
      </ScrollView>
    </View>
  </>
);

export default PlacesCategory;
