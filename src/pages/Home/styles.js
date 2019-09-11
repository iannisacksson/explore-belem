import { StyleSheet } from 'react-native';

import { colors, metrics } from '../../styles/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: metrics.baseMargin,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5,
  },
  nameApp: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 47,
    height: 55,
  },
  text: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.dark,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 25,
    color: colors.lighter,
    paddingHorizontal: 10,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: colors.input,
    paddingVertical: metrics.basePaddingButton,
  },
  iconSearch: {
    fontSize: 25,
    color: colors.lighter,
    paddingHorizontal: 10,
    backgroundColor: colors.input,
    paddingVertical: metrics.basePaddingButton,
    borderWidth: 1,
    borderColor: colors.input,
    borderTopLeftRadius: metrics.baseRadius,
    borderBottomLeftRadius: metrics.baseRadius,
  },
  iconMicrophone: {
    fontSize: 25,
    color: colors.lighter,
    paddingHorizontal: 15,
    backgroundColor: colors.input,
    paddingVertical: metrics.basePaddingButton,
    borderWidth: 1,
    borderColor: colors.input,
    borderTopRightRadius: metrics.baseRadius,
    borderBottomRightRadius: metrics.baseRadius,
  },
});

export default styles;
