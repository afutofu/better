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

  const onSaveTime = (time) => {
    if (!timerOn && time > 0) {
      saveTaskTime(task.id, time);
      setTime(0);
    }
  };

  useEffect(() => {
    if (tasks[task.id]) {
      setTimeHistory(tasks[task.id].timeHistory);
    }
  }, [tasks]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleArea}>
        <Text style={styles.title}>{task.name}</Text>
        <TouchableOpacity
          style={styles.taskDeleteButton}
          onPress={() => onDeleteTask(task.id)}
        >
          <FontAwesome name="trash-o" size={24} color="black" />
        </TouchableOpacity>
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

        <RoundedButton
          size={95}
          textStyle={styles.buttonTextStyle}
          onPress={() => clearTimeHistory(task.id)}
        >
          Clear
        </RoundedButton>
      </View>
      <View style={styles.data}>
        <TimeHistory
          history={timeHistory}
          onDeleteTimeItem={deleteTimeHistoryItem}
          taskId={task.id}
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
    borderTopWidth: 1,
  },
});

export default TimerScreen;
