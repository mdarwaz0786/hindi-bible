import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/Navigation/StactNavigation.js';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </>
  );
};

export default App;
