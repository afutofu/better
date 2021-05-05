import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";

const TaskList = ({ navigation, tasks }) => {
  const formatTime = (secs) => {
    console.log(secs);
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
        <>
          <FlatList
            contentContainerStyle={styles.list}
            data={tasks}
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
                  <Text>{formatTime(item.time)}</Text>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.id}
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  taskName: {
    fontSize: 16,
  },
});

export default TaskList;
