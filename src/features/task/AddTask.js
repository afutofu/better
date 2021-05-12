import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";

import RoundedButton from "../../components/RoundedButton";

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
      <RoundedButton onPress={() => onAddTask(task)} size={45}>
        +
      </RoundedButton>
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
    fontSize: 20,
  },
});

export default AddTask;
