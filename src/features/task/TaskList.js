import React, { useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { TasksContext } from "../../contexts/tasks.context";

const TaskList = ({ navigation }) => {
  const { tasks } = useContext(TasksContext);

  const formatTime = (secs) => {
    const hours = Math.floor(secs / 3600);
    const minutes = Math.floor((secs - hours * 3600) / 60);
    const seconds = secs - hours * 3600 - minutes * 60;

    if (hours > 0) return `${hours}h ${minutes}m ${seconds}s`;
    if (minutes > 0) return `${minutes}m ${seconds}s`;
    return `${secs}s`;
  };

  return (
    <View style={styles.container}>
      {tasks && tasks.length > 0 && (
        <FlatList
          contentContainerStyle={styles.list}
          data={tasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  navigation.navigate("Task Timer", { task: item })
                }
                style={styles.taskItem}
              >
                <Text style={styles.taskName}>{item.name}</Text>
                <Text style={styles.timeAmount}>{formatTime(item.time)}</Text>
              </TouchableOpacity>
            );
          }}
        />
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  taskName: {
    fontSize: 20,
  },
  timeAmount: {
    fontSize: 16,
  },
});

export default TaskList;
