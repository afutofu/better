import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/screens/HomeScreen";
import TimerScreen from "./src/screens/TimerScreen";

const Stack = createStackNavigator();

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 0, name: "Meditate", time: 530 },
    { id: 1, name: "English Essay", time: 7000 },
  ]);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  const addTask = (task) => {
    const newTask = { id: Date.now(), name: task, time: 0 };
    if (task) {
      setTasks((prevTasks) => {
        return [newTask, ...prevTasks];
      });
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home">
          {(props) => <HomeScreen {...props} tasks={tasks} addTask={addTask} />}
        </Stack.Screen>
        <Stack.Screen name="Task Timer">
          {(props) => <TimerScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
