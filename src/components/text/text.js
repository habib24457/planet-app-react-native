import { View, Text as RNText } from "react-native";
import React from "react";

export default function Text({ children, preset = "default", style }) {
  const textStyles = StyleSheet.compose(presets[preset], style);
  return (
    <View>
      <RNText style={textStyles}>{children}</RNText>
    </View>
  );
}
