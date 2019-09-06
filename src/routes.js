import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import inicio from './inicio'

export default createAppContainer(
  createSwitchNavigator({
    inicio,

  })
)
