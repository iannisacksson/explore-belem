import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import inicio from './inicio';
import login from './pages/Login/index';
import forgot from './pages/esqueceu-senha/index';
import register from './pages/registrar/index'

export default createAppContainer(
  createSwitchNavigator({
    register,
    forgot,
    inicio,
    login,
  })
);
