import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const TitleSection = ({ title }) => (
  <View style={styles.containerInfo}>
    <Text style={styles.titleAbaTop}>{title}</Text>
    <TouchableOpacity>
      <Text style={styles.textLink}>Ver Tudo</Text>
    </TouchableOpacity>
  </View>
);

export default TitleSection;
