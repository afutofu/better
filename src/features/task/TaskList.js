import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

const TaskList = ({ tasks }) => {
  return (
    <View style={styles.container}>
      {tasks.length > 0 && (
        <>
          <FlatList
            contentContainerStyle={styles.list}
            data={tasks}
            renderItem={({ item, index }) => {
              return (
                <Text key={index} style={styles.taskItem}>
                  {item}
                </Text>
              );
            }}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingHorizontal: 40,
  },
  list: {
    flex: 1,
  },
  taskItem: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default TaskList;
