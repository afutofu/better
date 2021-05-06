import React, { useState, useEffect, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { TasksContextProvider } from "./src/contexts/tasks.context";

import HomeScreen from "./src/screens/HomeScreen";
import TimerScreen from "./src/screens/TimerScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <TasksContextProvider>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Task Timer" component={TimerScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </TasksContextProvider>
  );
}
