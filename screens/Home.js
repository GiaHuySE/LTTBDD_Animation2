import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnBT}>
        <Text
          style={styles.btnText}
          onPress={() => navigation.navigate("Screen1")}
        >
          Bài tập 1
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnBT}>
        <Text
          style={styles.btnText}
          onPress={() => navigation.navigate("Screen2")}
        >
          Bài tập 2
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  btnBT: {
    height: 40,
    backgroundColor: "orange",
    padding: 10,
  },
  btnText: {
    fontWeight: "bold",
    fontSize: 15,
  },
});
