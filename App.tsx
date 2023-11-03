import * as React from "react";
import {MD3LightTheme as DefaultTheme, PaperProvider} from "react-native-paper";
import Index from "./Index";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    secondary: "yellow",
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Index />
    </PaperProvider>
  );
}
