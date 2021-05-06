import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const RoundedButton = ({ size = 120, style, textStyle, onPress, children }) => {
  return (
    <TouchableOpacity style={[styles(size).radius, style]} onPress={onPress}>
      <Text style={[styles(size).text, textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      justifyContent: "center",
      alignItems: "center",
      borderColor: "aquamarine",
      borderWidth: 2,
    },
    text: {
      color: "black",
      fontSize: size / 3,
    },
  });

export default RoundedButton;
