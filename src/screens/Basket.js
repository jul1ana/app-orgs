import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

import top from "../../assets/top.png";
import logo from "../../assets/logo.png";

// pegando a dimensao da tela
const width = Dimensions.get("screen").width;

export default function Basket() {
  return (
    <>
      <Image source={top} style={styles.top} />
      <Text style={styles.title}>Shopping basket details</Text>

      <View style={styles.basket}>
        <Text style={styles.name}>Basket of Vegetables</Text>
        <View style={styles.farm}>
          <Image source={logo} style={styles.imgFarm} />
          <Text style={styles.nameFarm}>Jenny Jack Farm</Text>
        </View>
        <Text style={styles.description}>
          A basket with carefully selected products from the farm straight to your kitchen
        </Text>
        <Text style={styles.price}>U$ 30,00</Text>
      </View>
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

  basket: {
    paddingVertical: 8,
    paddingHorizontal: 16
  },

  name: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontFamily: "MontserratBold"
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
    fontFamily: "MontserratRegular"
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