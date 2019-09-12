import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

import { View } from 'react-native';

import styles from './styles';

const TabBar = () => (
  <View style={styles.tab}>
    <Icon style={styles.iconBottom} name="home" />
    <Icon style={styles.iconBottom} name="heart" />
    <Icon style={styles.iconBottom} name="bell" />
    <Icon style={styles.iconBottom} name="user" />
  </View>
);

export default TabBar;
