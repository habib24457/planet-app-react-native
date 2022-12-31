import { StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import Text from "../components/text/text";
import PlanetHeader from "../components/planetHeader";
import { colors } from "../theme/colors";

export default function home() {
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
});
