import { View, Text, Animated, Dimensions, StyleSheet } from "react-native";
import React, { useState } from "react";

const widthScreen = Dimensions.get("window").width;
const heightScreen = Dimensions.get("window").height;
console.log("width: " + widthScreen + ", " + "height: " + heightScreen);

export default function Screen2() {
  const [location1, setLocation1] = useState({
    x1: Math.floor(Math.random() * (widthScreen - 200)) + 0, //random start at 0, end at widthScreen-250
    y1: Math.floor(Math.random() * (heightScreen / 3 - 88)), //random start at 0, end at heightScreen-100
  });
  const [location2, setLocation2] = useState({
    x2: Math.floor(Math.random() * (widthScreen - 160)),
    y2: Math.floor(Math.random() * (heightScreen / 3 - 109)),
  });
  const [location3, setLocation3] = useState({
    x3: Math.floor(Math.random() * (widthScreen - 210)),
    y3: Math.floor(Math.random() * (heightScreen / 3 - 92)),
  });

  const { x1, y1 } = location1;
  const { x2, y2 } = location2;
  const { x3, y3 } = location3;

  function handleRandomMove() {
    setLocation1({
      x1: Math.floor(Math.random() * (widthScreen - 200)) + 0, //random start at 0, end at widthScreen-250
      y1: Math.floor(Math.random() * (heightScreen / 3 - 88)), //random start at 0, end at heightScreen-100
    });
    setLocation2({
      x2: Math.floor(Math.random() * (widthScreen - 160)),
      y2: Math.floor(Math.random() * (heightScreen / 3 - 109)),
    });
    setLocation3({
      x3: Math.floor(Math.random() * (widthScreen - 210)),
      y3: Math.floor(Math.random() * (heightScreen / 3 - 92)),
    });
  }

  return (
    <View>
      <View
        style={styles.container}
        onStartShouldSetResponder={() => true}
        onMoveShouldSetResponder={() => true}
        onResponderGrant={handleRandomMove}
      >
        <Animated.Image
          source={require("../assets/mickey.gif")}
          style={{
            width: 100,
            height: 80,
            marginLeft: x1,
            marginTop: y1,
            top: 300,
          }}
        />
        <Animated.Image
          source={require("../assets/mickey.gif")}
          style={{
            width: 100,
            height: 80,
            marginLeft: x2,
            marginTop: y2,
            top: 200,
          }}
        />
        <Animated.Image
          source={require("../assets/mickey.gif")}
          style={{
            width: 100,
            height: 80,
            marginLeft: x3,
            marginTop: y3,
            top: 100,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-around",
  },
  viewRowRat: {
    flex: 1,
    // backgroundColor: 'red'
  },
});
