import { StyleSheet } from 'react-native';

import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 150,
    borderBottomRightRadius: 150,
    height: 200,
  },

  logo: {
    width: 97,
    height: 100,
  },

  containerBody: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 53,
  },

  title: {
    fontSize: 22,
    fontWeight: '700',
    fontFamily: 'Segie UI',
  },

  input: {
    backgroundColor: colors.input,
    borderRadius: metrics.baseRadius,
    fontSize: 20,
    marginTop: 17,
    paddingLeft: 17,
    paddingVertical: 8,
  },

  containerButton: {
    alignItems: 'flex-end',
    marginTop: 18,
  },

  button: {
    backgroundColor: colors.primary,
    paddingHorizontal: 35,
    paddingVertical: metrics.basePaddingButton,
    borderRadius: metrics.baseRadius,
  },

  buttonText: {
    fontSize: 20,
    color: colors.white,
  },
});

export default styles;
