import React from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import TextParaph from "../../components/TextParaph";

import Details from "./components/Details";
import Item from "./components/Item";
import Top from "./components/Top";

export default function Basket({ top, details, items }) {
  return (
    <>
      <FlatList
        data={items.list}
        renderItem={Item}
        keyExtractor={({ name }) => name}
        ListHeaderComponent={() => {
          return <>
            <Top {...top} />

            <View style={styles.basket}>
              <Details {...details} />
              <TextParaph style={styles.title}>{items.title}</TextParaph>
            </View>
          </>
        }}
      />
    </>
  );
}

/*
  CSS 
*/
const styles = StyleSheet.create({
  title: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32
  },

  basket: {
    paddingVertical: 8,
    paddingHorizontal: 16
  }
});