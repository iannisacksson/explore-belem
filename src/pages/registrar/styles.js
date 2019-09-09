import { StyleSheet } from 'react-native';

import { colors, metrics } from '../../styles/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secundary,
    borderBottomLeftRadius: 150,
    borderBottomRightRadius: 150,
    height: 200,
  },

  logo: {
    width: 97,
    height: 100,
  },

  design: {
    height: 67,
    backgroundColor: colors.secundary,
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
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
  },

  containerButton: {
    alignItems: 'flex-end',
    marginTop: 17,
  },

  button: {
    backgroundColor: colors.secundary,
    paddingHorizontal: 30,
    paddingVertical: metrics.basePaddingButton,
    borderRadius: metrics.baseRadius,
  },

  buttonText: {
    fontSize: 20,
    color: colors.white,
  },

  forgot: {
    fontSize: 13,
    color: '#78D1e5',
    textAlign: 'center',
    fontWeight: '600',
    marginTop: 10,
  },

  containerRegister: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
  },

  linkRegister: {
    fontSize: 13,
    color: '#78D1e5',
  },
});

export default styles;
