import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";

const TaskList = ({ navigation, tasks }) => {
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
                >
                  <Text style={styles.taskItem}>{item}</Text>
                </TouchableOpacity>
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
