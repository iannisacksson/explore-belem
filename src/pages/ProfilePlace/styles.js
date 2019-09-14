import { StyleSheet } from 'react-native';

import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: metrics.baseMargin,
  },
  section: {},
  titleSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: metrics.basePadding,
  },
  address: {
    flex: 1,
    flexDirection: 'row',
  },
  iconMap: {
    fontSize: 18,
    paddingRight: metrics.basePadding / 2,
    color: colors.dark,
  },
  location: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.dark,
  },
  heart: {
    fontSize: 18,
    color: colors.dark,
  },
  imageMain: {
    width: '100%',
    height: 190,
    borderRadius: metrics.baseRadiusImage,
  },
  imageSec: {
    width: 49,
    height: 49,
  },
  content: {
    fontSize: 17,
    lineHeight: 30,
    color: colors.content,
    paddingVertical: metrics.basePadding,
  },
});

export default styles;
