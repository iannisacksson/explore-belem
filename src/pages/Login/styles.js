import { StyleSheet } from 'react-native';

import { colors, metrics } from '../../styles/index';

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
    marginHorizontal: 20,
    marginTop: 53,
  },

  title: {
    fontSize: 30,
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
    backgroundColor: colors.primary,
    paddingHorizontal: 30,
    paddingVertical: metrics.basePaddingButton,
    borderRadius: metrics.baseRadius,
  },

  buttonText: {
    fontSize: 20,
    color: colors.white,
  },

  footer: {
    flex: 1,
    justifyContent: 'space-between',
  },

  forgot: {
    fontSize: 15,
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
    fontSize: 15,
    color: '#78D1e5',
    marginBottom: 30,
  }
})

export default styles;
