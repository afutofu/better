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

const TimerScreen = ({ route }) => {
  const { task } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleArea}>
        <Text style={styles.title}>{task.name}</Text>
      </View>
      <View style={styles.timer}>
        <Text style={styles.time}>03:53</Text>
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
    flex: 0.1,
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
  time: {
    fontSize: 120,
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
  },
});

export default TimerScreen;
