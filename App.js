import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/Navigation/StactNavigation.js';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </>
  );
};

export default App;
