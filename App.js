import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { RootNavigator } from "./src/config/AppNavigator";
export default function App() {
  console.log(process.env.EXPO_PUBLIC_API_URL);
  return (
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
  );
}
