import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {Button} from "react-native-paper";
import {AntDesign} from "@expo/vector-icons";

const ListNewsHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Latest News</Text>
      <Button
        icon={(props) => <AntDesign name="arrowright" {...props} />}
        style={styles.button}
        contentStyle={{flexDirection: "row-reverse", padding: 0}}
      >
        See All
      </Button>
    </View>
  );
};

export default ListNewsHeader;

const styles = StyleSheet.create({
  container: {
    height: 40,
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    flexDirection: "row",
    textAlign: "center",
    paddingHorizontal: 10,
  },
  text: {
    width: "30%",
    fontWeight: "600",
    fontSize: 18,
  },
  button: {
    width: 100,
  },
});
