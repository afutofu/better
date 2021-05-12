import React from "react";
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

const TimeHistory = ({ history, onDeleteTimeItem, taskId }) => {
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
      {history && history.length > 0 && (
        <FlatList
          contentContainerStyle={styles.list}
          data={history}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => {
            return (
              <View key={index} style={styles.timeItem}>
                <Text style={styles.text}>{item.date}</Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text style={styles.text}>{formatTime(item.time)}</Text>
                  <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() => onDeleteTimeItem(taskId, item.id)}
                  >
                    <Text style={styles.deleteButtonText}>-</Text>
                  </TouchableOpacity>
                </View>
              </View>
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
  },
  history: {
    flex: 1,
  },
  timeItem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 7,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  text: {
    color: "black",
    fontSize: 20,
  },
  deleteButton: {
    color: "red",
    marginLeft: 5,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteButtonText: {
    fontSize: 20,
  },
});

export default TimeHistory;
