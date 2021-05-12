import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Platform,
  StatusBar,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import RoundedButton from "../components/RoundedButton";
import Timer from "../features/timer/Timer";
import TimeHistory from "../features/timer/TimeHistory";

import { TasksContext } from "../contexts/tasks.context";

const TimerScreen = ({ navigation, route }) => {
  const { task } = route.params;
  const taskId = task.id;
  const [time, setTime] = useState(0);
  const [timeHistory, setTimeHistory] = useState(task.timeHistory);
  const [timerOn, setTimerOn] = useState(false);

  const {
    tasks,
    deleteTask,
    saveTaskTime,
    clearTimeHistory,
    deleteTimeHistoryItem,
  } = useContext(TasksContext);

  const onDeleteTask = (taskId) => {
    navigation.navigate("Home");
    deleteTask(taskId);
  };

  const onSaveTime = (taskId, time) => {
    if (!timerOn && time > 0) {
      saveTaskTime(taskId, time);
      setTime(0);
    }
  };

  useEffect(() => {
    if (tasks.length > 0) {
      const task = tasks.find((task) => task.id === taskId);
      setTimeHistory(task.timeHistory);
    }
  }, [tasks]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleArea}>
        <Text style={styles.title}>{task.name}</Text>
        <TouchableOpacity
          style={styles.taskDeleteButton}
          onPress={() => onDeleteTask(taskId)}
        >
          <FontAwesome name="trash-o" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.timer}>
        <Timer initialTime={time} timerOn={timerOn} setTime={setTime} />
      </View>
      <View style={styles.controls}>
        <RoundedButton
          size={85}
          textStyle={styles.buttonTextStyle}
          onPress={() => onSaveTime(taskId, time)}
        >
          Save
        </RoundedButton>
        {timerOn ? (
          <RoundedButton
            size={100}
            textStyle={styles.buttonTextStyle}
            onPress={() => setTimerOn(false)}
          >
            Pause
          </RoundedButton>
        ) : (
          <RoundedButton
            size={100}
            textStyle={styles.buttonTextStyle}
            onPress={() => setTimerOn(true)}
          >
            Start
          </RoundedButton>
        )}

        <RoundedButton
          size={85}
          textStyle={styles.buttonTextStyle}
          onPress={() => clearTimeHistory(taskId)}
        >
          Clear
        </RoundedButton>
      </View>
      <View style={styles.data}>
        <TimeHistory
          history={timeHistory}
          onDeleteTimeItem={deleteTimeHistoryItem}
          taskId={taskId}
        />
      </View>
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
  taskDeleteButton: {
    position: "absolute",
    right: 30,
  },
  timer: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ddd",
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  controls: {
    flex: 0.3,
    flexDirection: "row",
    paddingHorizontal: 30,
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonTextStyle: {
    fontSize: 16,
  },
  data: {
    flex: 0.3,
    backgroundColor: "aquamarine",
    borderColor: "#ddd",
    borderTopWidth: 1,
  },
});

export default TimerScreen;
