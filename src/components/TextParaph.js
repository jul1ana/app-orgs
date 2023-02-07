import React from "react";
import { StyleSheet, Text } from "react-native";

export default function TextParaph({ children, style }) {
  let styleDefault = styles.text;
  // quando nao usar o bold, sera aplicado o estilo padrao
  if (style?.fontWeight === "bold") {
    styleDefault = styles.textBold;
  }

  return (
    <Text style={[style, styleDefault]}>
      {children}
    </Text>
  );
}

/*
  CSS 
*/
const styles = StyleSheet.create({
  text: {
    fontFamily: "MontserratRegular",
    fontWeight: "normal"
  },

  textBold: {
    fontFamily: "MontserratBold",
    fontWeight: "normal"
  }
});