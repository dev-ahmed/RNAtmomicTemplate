import {
  // DarkTheme,
  DefaultTheme,
  // LinkingOptions,
  NavigationContainer,
} from '@react-navigation/native';
import React from 'react';
// import {useSelector} from 'react-redux';
import {RootStack} from './root-navigation';
// import {IRootState} from '../store';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export const Container: React.FC = () => {
  /*   const {theme} = useSelector((state: IRootState) => {
    return {
      theme: state.settingsReducer.theme,
    };
  });
 */
  // const isDark = theme === 'dark';

  /*   const linking: LinkingOptions = {
    prefixes: ['news://'],
    config: {
      screens: {
        News: 'news',
        Details: 'news/:id',
      },
    },
  }; */

  return (
    <SafeAreaProvider>
      <NavigationContainer
        /* linking={linking} */
        theme={DefaultTheme}>
        <RootStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
