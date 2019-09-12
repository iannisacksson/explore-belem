import { StyleSheet } from 'react-native';

import { colors, metrics, fonts } from '../../styles/index';

const styles = StyleSheet.create({
  scroll: {},
  componentView: {
    flex: 1,
    paddingHorizontal: 6,
  },
  imageView: {
    width: 140,
    height: 280,
    borderRadius: metrics.baseRadiusImage,
  },
  imageView2: {
    width: 200,
    height: 100,
    borderRadius: 2,
  },
  namePlace: {
    fontSize: fonts.input,
    fontWeight: '700',
    color: colors.dark,
    paddingTop: metrics.basePadding / 2,
  },
  nameCity: {
    fontSize: fonts.medium,
    fontWeight: '300',
    color: colors.light,
  },
});

export default styles;
