import React, { useState, useContext } from "react";
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

import { TasksContext } from "../contexts/tasks.context";

const TimerScreen = ({ route }) => {
  const { task } = route.params;
  const [time, setTime] = useState(task.time);
  const [timerOn, setTimerOn] = useState(false);

  const { saveTaskTime } = useContext(TasksContext);

  const onSaveTime = (time) => {
    saveTaskTime(task.id, time);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleArea}>
        <Text style={styles.title}>{task.name}</Text>
      </View>
      <View style={styles.timer}>
        <Timer initialTime={time} timerOn={timerOn} setTime={setTime} />
      </View>
      <View style={styles.controls}>
        <RoundedButton
          size={95}
          textStyle={styles.buttonTextStyle}
          onPress={() => onSaveTime(time)}
        >
          Save
        </RoundedButton>
        {timerOn ? (
          <RoundedButton
            size={115}
            textStyle={styles.buttonTextStyle}
            onPress={() => setTimerOn(false)}
          >
            Pause
          </RoundedButton>
        ) : (
          <RoundedButton
            size={115}
            textStyle={styles.buttonTextStyle}
            onPress={() => setTimerOn(true)}
          >
            Start
          </RoundedButton>
        )}

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
