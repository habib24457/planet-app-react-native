import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  View,
  Pressable,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import Text from "../components/text/text";
import PlanetHeader from "../components/planetHeader";
import { colors } from "../theme/colors";
import { PLANET_LIST } from "../data/planet-list";
import { spacing } from "../theme/spacing";
import { AntDesign } from "@expo/vector-icons";

export default function Home({ navigation }) {
  const [list, setList] = useState(PLANET_LIST);

  const renderItem = ({ item }) => {
    return (
      <Pressable
        onPress={() => {
          navigation.navigate("Details", { planet: item });
        }}
      >
        <View style={styles.item}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={[styles.circle, { backgroundColor: item.color }]}
            ></View>
            <Text preset="h4" style={styles.itemName}>
              {item.name}
            </Text>
          </View>

          <AntDesign name="right" size={18} color="white" />
        </View>
      </Pressable>
    );
  };

  const searchFilter = (text) => {
    const filteredList = PLANET_LIST.filter((item) => {
      const itemName = item.name.toLocaleLowerCase();
      const userTypedText = text.toLocaleLowerCase();
      return itemName.indexOf(userTypedText) > -1;
    });
    setList(filteredList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader />

      <TextInput
        placeholder="Type the planet name"
        placeholderTextColor={colors.white}
        autoCorrect={false}
        style={styles.searchInput}
        onChangeText={(text) => {
          searchFilter(text);
        }}
      />

      <FlatList
        contentContainerStyle={styles.list}
        data={list}
        keyExtractor={(item) => item.name}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: spacing[4],
    justifyContent: "space-between",
  },
  list: {
    padding: spacing[4],
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  itemName: {
    textTransform: "uppercase",
    marginLeft: spacing[4],
  },
  separator: {
    borderBottomColor: colors.white,
    borderWidth: 0.5,
  },
  searchInput: {
    padding: spacing[4],
    color: colors.white,
    borderBottomColor: colors.white,
    borderBottomWidth: 1,
    margin: spacing[5],
  },
});
