import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";

const Timer = ({ initialTime, timerOn, setTime }) => {
  const interval = useRef(null);
  const [seconds, setSeconds] = useState(initialTime);

  const countUp = () => {
    setSeconds((prevTime) => {
      const timeLeft = prevTime + 1;
      return timeLeft;
    });
  };

  const formatTime = (secs) => {
    let hours = Math.floor(secs / 3600);
    let minutes = Math.floor((secs - hours * 3600) / 60);
    let seconds = secs - hours * 3600 - minutes * 60;

    if (seconds < 10) {
      seconds = `0${seconds}`;
      if (!seconds) seconds = "00";
    }

    if (minutes < 10) {
      minutes = `0${minutes}`;
      if (!minutes) minutes = "00";
    }

    return `${minutes}:${seconds}`;
  };

  useEffect(() => {
    if (!timerOn) {
      if (interval.current) clearInterval(interval.current);
      setTime(seconds);
      return;
    }

    interval.current = setInterval(countUp, 1000);

    return () => clearInterval(interval.current);
  }, [timerOn]);

  useEffect(() => {
    if (initialTime === 0) {
      setSeconds(initialTime);
    }
  }, [initialTime]);

  return (
    <View style={styles.timer}>
      <Text style={styles.time}>{formatTime(seconds)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  timer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  time: {
    fontSize: 90,
  },
});

export default Timer;
