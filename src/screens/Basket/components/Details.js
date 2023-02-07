import React from "react";
import { Image, StyleSheet, View } from "react-native";

import TextParaph from "../../../components/TextParaph";

export default function Details({ name, logoFarm, nameFarm, description, price }) {
  return (
    <>
      <TextParaph style={styles.name}>{name}</TextParaph>
      <View style={styles.farm}>
        <Image source={logoFarm} style={styles.imgFarm} />
        <TextParaph style={styles.nameFarm}>{nameFarm}</TextParaph>
      </View>
      <TextParaph style={styles.description}>{description}</TextParaph>
      <TextParaph style={styles.price}>{price}</TextParaph>
    </>
  );
}

/*
  CSS 
*/
const styles = StyleSheet.create({
  name: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold"
  },

  farm: {
    flexDirection: "row",
    paddingVertical: 12
  },

  imgFarm: {
    width: 32,
    height: 32
  },

  nameFarm: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },

  description: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26
  },

  price: {
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8
  }
});
