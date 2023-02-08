import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import TextParaph from "./TextParaph";

export default function Button({ text, style, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
    >
      <TextParaph style={styles.buttonText}>{text}</TextParaph>
    </TouchableOpacity>
  );
}

/*
  CSS 
*/
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#2A9F85",
    paddingVertical: 16,
    borderRadius: 6
  },

  buttonText: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold"
  }
});