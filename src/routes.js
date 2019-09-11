import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Register from './pages/Register';
import Home from './pages/Home';

export default createAppContainer(
  createSwitchNavigator({
    Home,
    Register,
    ForgotPassword,
    Login,
    Welcome,
  })
);
