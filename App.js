import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';

import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from "@expo-google-fonts/montserrat";

import Basket from './src/screens/Basket';

export default function App() {
  const [loadedFont] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  });

  if (!loadedFont) {
    // caso a fonte nao carregue, tela branca
    return <View />
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Basket />
    </SafeAreaView>
  );
}