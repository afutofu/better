import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Platform,
  StatusBar,
  Text,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";

import RoundedButton from "../components/RoundedButton";
import Timer from "../features/timer/Timer";

const TimerScreen = ({ route }) => {
  const { task } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleArea}>
        <Text style={styles.title}>{task.name}</Text>
      </View>
      <View style={styles.timer}>
        <Timer initialTime={task.time} />
      </View>
      <View style={styles.controls}>
        <RoundedButton size={95} textStyle={styles.buttonTextStyle}>
          Save
        </RoundedButton>
        <RoundedButton size={115} textStyle={styles.buttonTextStyle}>
          Start
        </RoundedButton>
        <RoundedButton size={95} textStyle={styles.buttonTextStyle}>
          Clear
        </RoundedButton>
      </View>
      <View style={styles.data}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  titleArea: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  timer: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  controls: {
    flex: 0.3,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  buttonTextStyle: {
    fontSize: 16,
  },
  data: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "aquamarine",
  },
});

export default TimerScreen;
