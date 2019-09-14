import React from 'react';

import PropTypes from 'prop-types';

import { View, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const TitleSecundary = ({ title }) => (
  <View style={styles.header}>
    <Text style={styles.title}>{title}</Text>
    <TouchableOpacity>
      <Icon style={styles.back} name="arrow-left" />
    </TouchableOpacity>
  </View>
);

TitleSecundary.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TitleSecundary;
