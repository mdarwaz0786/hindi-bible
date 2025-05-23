import { AppRegistry } from 'react-native';
import App from './App.js';
import { name as appName } from './app.json';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Main = () => (
  <SafeAreaProvider>
    <App />
  </SafeAreaProvider>
);

AppRegistry.registerComponent(appName, () => Main);
