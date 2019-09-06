import { StyleSheet } from 'react-native';
import { colors, metrics } from './styles/index';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    margin: metrics.baseMargin,
  },

  button: {
    backgroundColor: colors.secundary,
    width: 170,
    alignItems: 'center',
    paddingVertical: metrics.basePaddingButton,
    borderRadius: metrics.baseRadius,
    marginVertical: metrics.baseMargin,
  },

  buttonText: {
    color: colors.white,
  },
});

export default styles;
