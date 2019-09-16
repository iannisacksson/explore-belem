import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Welcome from './pages/Welcome';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import Register from './pages/Register';
import Home from './pages/Home';
import ProfilePlace from './pages/ProfilePlace';
import Favorites from './pages/Favorites';

export default createAppContainer(
  createSwitchNavigator({
    SignIn,
    SignUp,
  }),
  createStackNavigator(
    {
      Welcome: { screen: Welcome },
      SignIn: { screen: SignIn },
      ForgotPassword: { screen: ForgotPassword },
      Register: { screen: Register },
      Favorites: { screen: Favorites },
      Home: { screen: Home },
      ProfilePlace: { screen: ProfilePlace },
    },
    {
      headerMode: 'none',
      initialRouteName: 'SignIn',
    }
  )
);
