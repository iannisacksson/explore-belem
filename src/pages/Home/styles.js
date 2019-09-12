import { StyleSheet } from 'react-native';

import { colors, metrics, fonts } from '../../styles/index';

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
    marginTop: 30,
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

  contentView: {
    marginTop: metrics.basePadding,
  },
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
  scroll: {},
  componentView: {
    flex: 1,
    paddingHorizontal: 6,
  },
  imageView: {
    width: 140,
    height: 280,
    borderRadius: metrics.baseRadiusImage,
  },
  imageView2: {
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
  viewCultura: {
    marginTop: 20,
  },
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
