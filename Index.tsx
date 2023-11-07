import React from "react";
import { SafeAreaView } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import GlobalStyles from "./GlobalStyle";

const Index = () => {
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <HomeScreen />
    </SafeAreaView>
  );
};

export default Index;
