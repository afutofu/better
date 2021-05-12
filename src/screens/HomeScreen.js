import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import AddTask from "../features/task/AddTask";
import TaskList from "../features/task/TaskList";

import { TasksContext } from "../contexts/tasks.context";

const HomeScreen = ({ navigation }) => {
  const { tasks, addTask } = useContext(TasksContext);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <AddTask addTask={addTask} />
      <TaskList tasks={tasks} navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default HomeScreen;
