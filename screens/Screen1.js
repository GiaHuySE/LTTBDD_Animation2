import { View, Text, StyleSheet, Animated } from "react-native";
import React from "react";
import icon from "../assets/1.gif";
import { useState } from "react";
export default function Screen1() {
  const [location, setLocation] = useState({
    x: null,
    y: null,
    marginLeft: new Animated.Value(10),
    marginTop: new Animated.Value(10),
  });

  function onPress(evt) {
    console.log("====================================");
    var x = evt.nativeEvent.locationX;
    console.log("====================================");
    console.log(x);
    console.log("====================================");
    var y = evt.nativeEvent.locationY;
    console.log("====================================");
    setLocation({
      x: x,
      y: y,
      marginLeft: x,
      marginTop: y,
    });
  }
  function onMove(evt) {
    console.log("====================================");
    console.log(location);
    console.log("====================================");
    //setLocation({marginLeft: x, marginTop: y })
  }
  function onRelease() {
    console.log("Realse!");
  }
  const { marginTop, marginLeft } = location;
  return (
    <View
      onStartShouldSetResponder={() => true}
      onMoveShouldSetResponder={() => true}
      onResponderGrant={onPress}
      onResponderMove={onMove}
      onResponderRelease={onRelease}
      style={styles.container}
    >
      <Text>Show something!</Text>

      <Animated.Image
        source={icon}
        style={{ marginLeft: marginLeft, marginTop: marginTop,height:70,width:100 }}
      ></Animated.Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
