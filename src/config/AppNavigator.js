import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import OwnersOverview from "../screens/OwnersOverview";
const RootStack = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <RootStack.Navigator>
    <RootStack.Screen name="OwnersOverview" component={OwnersOverview} options={{ headerShown:false }} />
    </RootStack.Navigator>
  );
};
