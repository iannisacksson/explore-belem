import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Register from './pages/Register';
import Home from './pages/Home';
import ProfilePlace from './pages/ProfilePlace';
import Favorites from './pages/Favorites';

export default createAppContainer(
  createSwitchNavigator({
    ProfilePlace,
    Favorites,

    Home,
    Register,
    ForgotPassword,
    Login,
    Welcome,
  })
);
