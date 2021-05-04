import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

const AddTask = ({ addTask }) => {
  const [task, setTask] = useState("");

  const onAddTask = (task) => {
    addTask(task);
    setTask("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Add New Task..."
        style={styles.input}
        value={task}
        onChangeText={(text) => setTask(text)}
      />
      <Button
        onPress={() => onAddTask(task)}
        title="+"
        color="#841584"
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 40,
  },
  input: {
    flex: 1,
  },
  button: {
    borderRadius: 10,
  },
});

export default AddTask;
