import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AccountScreen } from "../../features/account/screens/account.screen";
import { LoginScreen } from "../../features/account/screens/login.screen";
import { RegisterScreen } from "../../features/account/screens/register.screen";

const Tab = createBottomTabNavigator();

export const AccountNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Tab.Screen name="Main" component={AccountScreen} />
    <Tab.Screen name="Login" component={LoginScreen} />
    <Tab.Screen name="Register" component={RegisterScreen} />
  </Tab.Navigator>
);
