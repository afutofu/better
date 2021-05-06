import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const Timer = ({ initialTime }) => {
  const formatTime = (secs) => {
    console.log(secs);
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

  return (
    <View style={styles.timer}>
      <Text style={styles.time}>{formatTime(initialTime)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  timer: {
    flex: 1,
  },
  time: {
    fontSize: 120,
  },
});

export default Timer;
