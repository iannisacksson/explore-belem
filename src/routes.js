import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Welcome from './pages/Welcome';
import login from './pages/Login';
import forgot from './pages/esqueceu-senha';
import register from './pages/registrar';

export default createAppContainer(
  createSwitchNavigator({
    Welcome,
    forgot,
    register,
    login,
  })
);
