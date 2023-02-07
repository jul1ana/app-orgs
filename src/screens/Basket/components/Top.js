import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";

import TextParaph from "../../../components/TextParaph";
import top from "../../../../assets/top.png";

// pegando a dimensao da tela
const width = Dimensions.get("screen").width;

export default function Top({ title }) {
  return (
    <>
      <Image source={top} style={styles.top} />
      <TextParaph style={styles.title}>{title}</TextParaph>
    </>
  );
}

/*
  CSS 
*/
const styles = StyleSheet.create({
  top: {
    width: "100%",
    // altura x largura da img
    height: 578 / 768 * width
  },

  title: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
    color: "#fff",
    fontWeight: "bold",
    padding: 35
  },
});