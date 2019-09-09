import { StyleSheet } from 'react-native';
import { colors, metrics } from './styles/index';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  containerLogo: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  logo: {
    height: 97,
    width: 100,
    marginBottom: 50,
  },

  containerButtons: {
    flex: 1,
    marginTop: 33,
  },

  button: {
    backgroundColor: colors.secundary,
    width: 170,
    alignItems: 'center',
    paddingVertical: metrics.basePaddingButton,
    borderRadius: metrics.baseRadius,
    marginTop: 17,
  },

  buttonText: {
    color: colors.white,
    fontSize: 20,
  },
});

export default styles;
