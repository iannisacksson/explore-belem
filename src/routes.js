import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Welcome from './pages/Welcome';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Register from './pages/Register';
import Home from './pages/Home';
import ProfilePlace from './pages/ProfilePlace';
import Favorites from './pages/Favorites';

export default createAppContainer(
  createStackNavigator(
    {
      Welcome: { screen: Welcome },
      Login: { screen: Login },
      ForgotPassword: { screen: ForgotPassword },
      Register: { screen: Register },
      Favorites: { screen: Favorites },
      Home: { screen: Home },
      ProfilePlace: { screen: ProfilePlace },
    },
    {
      headerMode: 'none',
      initialRouteName: 'Welcome',
    }
  )
);
