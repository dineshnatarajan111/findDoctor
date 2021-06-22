import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { 
  Platform,
  SafeAreaView,
  StatusBar
} from 'react-native';
import SwitchNavigator from './src/navigation/switchNavigation';

class App extends React.Component {
  render() {
    return(
      <NavigationContainer>
        <StatusBar barStyle = "light-content" backgroundColor = {Platform.OS == 'android' ? "#14152B" : null} />
        <SwitchNavigator />
      </NavigationContainer>
    );
  }
}

export default App;