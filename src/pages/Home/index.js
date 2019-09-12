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

import TopPlace from '../../components/TopPlace';
import PlacesCategory from '../../components/PlacesCategory';
import TabBar from '../../components/TabBar';

import styles from './styles';
import { colors } from '../../styles';

const Home = ({ navigation }) => (
  <>
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.nameApp}>
          <Image style={styles.logo} source={Logo} />
          <Text style={styles.text}>Espia Belém</Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon style={styles.icon} name="comment" />
          <Icon style={styles.icon} name="calendar" />
          <Icon style={styles.icon} name="bell" />
        </View>
      </View>
      <ScrollView>
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
          <TopPlace />
          <TouchableOpacity onPress={() => navigation.navigate('ProfilePlace')}>
            <Text />
          </TouchableOpacity>
          <PlacesCategory />
        </ScrollView>
      </ScrollView>
    </View>

    <TabBar />
  </>
);

export default Home;
