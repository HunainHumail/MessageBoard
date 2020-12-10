/**
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import "react-native-gesture-handler";
import { StatusBar, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { NavigationService, Colors } from "./src/config";
import { Provider } from "react-redux";
import { store } from "./src/store";
//import {MainStack} from './src/stacks/MainStack';
import { MainStack } from "./src/stacks/MainStack";
const App = (props) => {
  //NotificationService.RemotePushController()
  return (
    <Provider store={store}>
      {Platform.OS == "android" ? (
        <StatusBar barStyle="dark-content" backgroundColor={Colors.White} />
      ) : (
        <></>
      )}
        <NavigationContainer
          ref={(ref) => NavigationService.setTopLevelNavigator(ref)}
          theme={{ colors: { background: Colors.Primary } }}
        >
          <MainStack />
        </NavigationContainer>
    </Provider>
  );
};

export default App;
