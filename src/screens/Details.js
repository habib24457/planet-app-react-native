import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Pressable,
  Linking,
} from "react-native";
import React from "react";
import Text from "../components/text/text";
import PlanetHeader from "../components/planetHeader";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import {
  EarthSvg,
  JupiterSvg,
  MarsSvg,
  MercurySvg,
  NeptuneSvg,
  SaturnSvg,
  UranusSvg,
  VenusSvg,
} from "../svg";

const PlanetSection = ({ title, value }) => {
  return (
    <View style={styles.planetSection}>
      <Text preset="small" style={{ textTransform: "uppercase" }}>
        {title}
      </Text>
      <Text preset="h2">{value}</Text>
    </View>
  );
};

export default function Details({ navigation, route }) {
  const planet = route.params.planet;
  const {
    name,
    description,
    wikiLink,
    rotationTime,
    revolutionTime,
    radius,
    avgTemp,
  } = planet;
  console.log(planet);

  const renderImage = (planetName) => {
    switch (planetName) {
      case "mercury":
        return <MercurySvg />;
      case "earth":
        return <EarthSvg />;
      case "jupiter":
        return <JupiterSvg />;
      case "mars":
        return <MarsSvg />;
      case "neptune":
        return <NeptuneSvg />;
      case "saturn":
        return <SaturnSvg />;
      case "uranus":
        return <UranusSvg />;
      case "venus":
        return <VenusSvg />;
    }
  };

  const onPressLink = () => {
    Linking.openURL(wikiLink);
  };

  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader backBtn={true} />
      <ScrollView>
        <View style={styles.planetImageView}>{renderImage(name)}</View>

        <View style={styles.textView}>
          <Text preset="h1" style={styles.planetName}>
            {name}
          </Text>
          <Text style={styles.planetDescription}>{description}</Text>

          <Pressable onPress={onPressLink} style={styles.source}>
            <Text>Source: </Text>
            <Text preset="h4" style={styles.wikiPedia}>
              Wikipedia
            </Text>
          </Pressable>
        </View>

        <PlanetSection title="ROTATION TIME" value={rotationTime} />
        <PlanetSection title="REVOLUTION TIME" value={revolutionTime} />
        <PlanetSection title="RADIUS" value={radius} />
        <PlanetSection title="AVERAGE TEMP" value={avgTemp} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  planetImageView: {
    padding: spacing[5],
    alignItems: "center",
    justifyContent: "center",
  },
  textView: {
    margin: spacing[6],
    marginHorizontal: spacing[5],
  },
  planetName: {
    textTransform: "uppercase",
    textAlign: "center",
  },
  planetDescription: {
    textAlign: "center",
    marginTop: spacing[5],
    lineHeight: 19,
  },
  source: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: spacing[5],
  },
  wikiPedia: {
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  planetSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[5],
    borderWidth: 1,
    borderColor: colors.grey,
    marginHorizontal: spacing[6],
    marginBottom: spacing[4],
  },
});
