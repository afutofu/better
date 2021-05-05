import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import AddTask from "../features/task/AddTask";
import TaskList from "../features/task/TaskList";

const HomeScreen = ({ navigation, tasks, addTask }) => {
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
