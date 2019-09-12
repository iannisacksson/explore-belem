import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  baseMargin: 10,
  basePadding: 20,
  baseRadius: 26,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,

  basePaddingButton: 10,
  baseHeight: 124,
  baseRadiusLogo: 100,
  baseRadiusImage: 6,
};
