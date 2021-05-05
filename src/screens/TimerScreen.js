import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";

const TimerScreen = ({ route }) => {
  const { task } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text>{task.name}</Text>
      <View style={styles.timer}>
        <Text>03:53</Text>
      </View>
      <View style={styles.controls}></View>
      <View style={styles.data}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 40,
  },
  timer: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  controls: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  data: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TimerScreen;
