import React from "react";
import { StyleSheet, View } from "react-native";

import Details from "./components/Details";
import Top from "./components/Top";

export default function Basket({ top, details }) {
  return (
    <>
      <Top {...top} />
      <View style={styles.basket}>
        <Details {...details} />
      </View>
    </>
  );
}

/*
  CSS 
*/
const styles = StyleSheet.create({
  basket: {
    paddingVertical: 8,
    paddingHorizontal: 16
  }
});