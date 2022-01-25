import { StyleSheet, Text, View } from "react-native";
// import * as tf from "@tensorflow/tfjs";
// import "@tensorflow/tfjs-react-native";
import React, { useState, useEffect, useRef } from "react";

import { RNCamera } from "react-native-camera";

export default function SignToTextScreen({ navigation }) {
  const camRef = useRef(null);
  const className = ["Aku", "Apa", "Apakabar", "Baik", "Kamu", "Nama", "Siapa"];
  const [hasil, setHasil] = useState("Loading Tensor Flow");

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {hasil}
        </Text>
      </View>
      <RNCamera
        style={styles.camera}
        type={RNCamera.Constants.Type.back}
        ref={camRef}
        ratio={"1:1"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  textContainer: {
    height: 50,
    width: 360,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000"
  },
  text: {
    color: "#fff"
  },
  camera: {
    // position: "absolute",
    width: 360,
    height: 360
  }
});
