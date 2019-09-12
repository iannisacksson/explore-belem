import { StyleSheet } from 'react-native';

import { colors, metrics } from '../../styles/index';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: metrics.baseMargin,
    flex: 1,
  },
  favoritePlace: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  containerPhotos: {
    paddingTop: metrics.basePadding / 2,
  },
  photo: {
    width: 181,
    height: 110,
    borderRadius: metrics.baseRadiusImage,
  },
  namePlace: {
    fontSize: 17,
    color: colors.dark,
  },
  nameCity: {
    fontSize: 11,
    color: colors.content,
  },
});

export default styles;
