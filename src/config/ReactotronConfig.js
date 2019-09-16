import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (__DEV__) {
  const tron = Reactotron.configure({ host: '192.168.0.21' }) // controls connection & communication settings
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect(); // let's connect!

  tron.clear();

  console.tron = tron;
}
