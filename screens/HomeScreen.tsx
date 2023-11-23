import {View, Text, StyleSheet, FlatList, ImageBackground} from "react-native";
import React from "react";
import {Searchbar, SegmentedButtons} from "react-native-paper";
import {Ionicons} from "@expo/vector-icons";
import {backgroundColor, primery} from "../types/colors";
import ListNewsHeader from "../components/ListNewsHeader";
import {useNewsApi} from "../apis/query";
import {buttonList} from "../utils/Const";

export default function HomeScreen() {
  const {data} = useNewsApi();
  console.log(data);
  const [categorys, setCategorys] = React.useState("");
  return (
    <View style={style.viewPort}>
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
      <ListNewsHeader />
      <FlatList
        data={data}
        horizontal
        renderItem={({item}) => <ItemList item={item} />}
        keyExtractor={(item) => item.url}
        style={style.flatListStyle}
      />
      <SegmentedButtons
        value={categorys}
        onValueChange={setCategorys}
        buttons={buttonList}
        density="small"
      />
    </View>
  );
}

const ItemList: React.FC = (props) => {
  const image = {uri: props.item.urlToImage};
  return (
    <View style={style.listNewsStyle}>
      <ImageBackground source={image} resizeMode="cover" style={style.image}>
        <View style={style.itemBody}>
          <Text style={style.text}>By {props.item.author}</Text>
          <Text style={style.title}>By {props.item.title}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const style = StyleSheet.create({
  viewPort: {
    flex: 1,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    marginBottom: 15,
    width: "100%",
    height: 30,
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

  listNewsStyle: {
    height: 200,
    width: 350,
    margin: 20,
    marginRight: 0,
    borderRadius: 20,
    overflow: "hidden",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 20,
  },
  itemBody: {
    flex: 1,
    backgroundColor: "#000000c1",
    opacity: 0.7,
    paddingHorizontal: 20,
    paddingTop: "18%",
  },
  text: {
    color: backgroundColor,
    zIndex: 20,
    marginBottom: 10,
  },
  title: {
    color: backgroundColor,
    zIndex: 20,
    fontSize: 20,
  },
  flatListStyle: {
    // height: 220,
    flexGrow: 0,
  },
});
