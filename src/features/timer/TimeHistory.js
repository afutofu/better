import React from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";

const TimeHistory = ({ history }) => {
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
      {history && history.length && (
        <FlatList
          contentContainerStyle={styles.list}
          data={history}
          renderItem={({ item, index }) => {
            return (
              <View key={index} style={styles.timeItem}>
                <Text style={styles.timeAmount}>{formatTime(item.time)}</Text>
                <Text style={styles.deleteButton}>-</Text>
              </View>
            );
          }}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  history: {
    flex: 1,
  },
  timeItem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  timeAmount: {
    fontSize: 16,
  },
  deleteButton: {
    color: "red",
  },
});

export default TimeHistory;
