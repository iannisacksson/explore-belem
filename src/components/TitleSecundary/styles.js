import { StyleSheet } from 'react-native';

import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: metrics.basePadding,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: colors.dark,
  },
  back: {
    fontSize: 23,
    color: colors.dark,
  },
});

export default styles;
