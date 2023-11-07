import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Searchbar } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { primery } from "../types/colors";
export default function HomeScreen() {
  return (
    <View>
      <View style={style.container}>
        <Searchbar
          placeholder="Search"
          onChangeText={(e) => console.log(e)}
          value={""}
          mode="bar"
          style={style.shearchStyle}
          inputStyle={style.inputStyle}
        />

        <Ionicons
          style={style.iconStyle}
          name="notifications-circle-outline"
          size={34}
          color="snow"
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    paddingHorizontal: 15,
    width: "100%",
    // height: 30,
  },
  shearchStyle: {
    height: 40,
    width: "85%",
  },
  inputStyle: {
    margin: 0,
    padding: 0,
  },
  iconStyle: {
    color: primery,
  },
});
