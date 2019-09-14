import { StyleSheet } from 'react-native';

import { colors, metrics, fonts } from '~/styles';

const styles = StyleSheet.create({
  containerInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: metrics.basePadding / 2,
  },
  titleAbaTop: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.dark,
  },
  textLink: {
    fontSize: fonts.regular,
    fontWeight: '300',
    color: colors.lighter,
  },
});

export default styles;
