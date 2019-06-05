import * as React from "react";
import { View, Dimensions, StyleSheet, Text } from "react-native";
import { DangerZone, LinearGradient } from "expo";

import Labels from "./Label";

const { Animated } = DangerZone;
const { Value, max, add, round, divide } = Animated;

const { width: totalWidth } = Dimensions.get("window");
const count = 5;
const width = totalWidth / count - 20;
const height = width;

export default ({reset,comment}) => {
   console.log(comment)
  const x = new Value(0);
  return (
   
      
  );
};

const styles = StyleSheet.create({
  container: {
    width: totalWidth,
    height,
    borderRadius: height / 2,
    backgroundColor: "#f1f2f6"
  }
});
