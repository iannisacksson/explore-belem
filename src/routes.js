import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Register from './pages/Register';

export default createAppContainer(
  createSwitchNavigator({
    Register,
    ForgotPassword,
    Login,
    Welcome,



  })
);
