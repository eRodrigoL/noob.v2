import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import SettingsScreen from "@screens/SettingsScreen";
import TestScreen from "@screens/TestScreen";

export type RootStackParamList = {
  TestScreen: undefined;
  SettingsScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TestScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="TestScreen" component={TestScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
