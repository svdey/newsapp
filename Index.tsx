import React from "react";
import {SafeAreaView} from "react-native";
import HomeScreen from "./screens/HomeScreen";
import GlobalStyles from "./GlobalStyle";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();
const Index = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={GlobalStyles.droidSafeArea}>
        <HomeScreen />
      </SafeAreaView>
    </QueryClientProvider>
  );
};

export default Index;
