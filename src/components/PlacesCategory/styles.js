import { StyleSheet } from 'react-native';

import { colors, metrics, fonts } from '~/styles';

const styles = StyleSheet.create({
  scroll: {},
  componentView: {
    flex: 1,
    paddingHorizontal: 6,
  },
  image: {
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
