import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import AddTask from "./src/features/task/AddTask";

export default function App() {
  const [tasks, setTasks] = useState(["Meditate", "English Essay"]);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  const addTask = (task) => {
    if (task) {
      setTasks((prevTasks) => {
        return [task, ...prevTasks];
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <AddTask addTask={addTask} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
