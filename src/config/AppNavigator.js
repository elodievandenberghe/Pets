import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/login";
const RootStack = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Login" component={Login} />
    </RootStack.Navigator>
  );
};
