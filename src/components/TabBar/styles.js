import { StyleSheet } from 'react-native';

import { colors } from '~/styles';

const styles = StyleSheet.create({
  tab: {
    backgroundColor: colors.white,
    height: 41,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  iconBottom: {
    fontSize: 26,
    color: colors.dark,
  },
});

export default styles;
