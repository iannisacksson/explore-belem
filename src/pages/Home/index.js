import React from 'react';

import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import Logo from '../../assets/logo.png';
import Combu from '../../assets/image/combu.png';
import Cutijuba from '../../assets/image/cutijuba.png';
import Mosqueiro from '../../assets/image/mosqueiro.png';
import FeiraDoLivro from '../../assets/image/feiradolivro.png';
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
    <ScrollView
      contentContainerStyle={styles.contentView}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.contentInfo}>
        <Text style={styles.textContainer}>Populares na cidade</Text>
        <TouchableOpacity>
          <Text style={styles.textContainer2}>Ver Tudo</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
        horizontal
      >
        <View style={styles.componentView}>
          <Image style={styles.imageView} source={Combu} />
          <Text style={styles.titleIlha}>Combu</Text>
          <Text style={styles.subText}>Belém</Text>
        </View>
        <View style={styles.componentView}>
          <Image style={styles.imageView} source={Cutijuba} />
          <Text style={styles.titleIlha}>Cotijuba</Text>
          <Text style={styles.subText}>Belém</Text>
        </View>
        <View style={styles.componentView}>
          <Image style={styles.imageView} source={Mosqueiro} />
          <Text style={styles.titleIlha}>Mosqueiro</Text>
          <Text style={styles.subText}>Belém</Text>
        </View>
      </ScrollView>
      <View style={styles.viewCultura}>
        <View style={styles.contentInfo}>
          <Text style={styles.textContainer}>Eventos Culturais</Text>
          <TouchableOpacity>
            <Text style={styles.textContainer2}>Ver Tudo</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scroll}
          horizontal
        >
          <View style={styles.componentView}>
            <Image style={styles.imageView2} source={FeiraDoLivro} />
            <Text style={styles.titleIlha}>Feira Do Livro</Text>
            <Text style={styles.subText}>Belém</Text>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
    <View style={styles.tab}>
        <Icon style={styles.icon} name="home" />
        <Icon style={styles.icon} name="heart" />
        <Icon style={styles.icon} name="bell" />
        <Icon style={styles.icon} name="user" />
    </View>
  </View>
);

export default Home;
