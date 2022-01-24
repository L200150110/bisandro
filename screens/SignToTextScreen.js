import { StyleSheet, Text, View } from "react-native";
// import * as tf from "@tensorflow/tfjs";
// import "@tensorflow/tfjs-react-native";
import React, { useState, useEffect, useRef } from "react";

// import { Camera } from "expo-camera";

export default function SignToTextScreen({ navigation }) {
  const camRef = useRef(null);
  const className = ["Aku", "Apa", "Apakabar", "Baik", "Kamu", "Nama", "Siapa"];
  const [hasil, setHasil] = useState("Loading Tensor Flow");

  const runCoco = async () => {
    const net = await tf.loadLayersModel(
      "http://bisandro.com/uploads/model/model.json"
    );

    // setInterval(() => {
    detect(net);
    // }, 100);
  };

  const getPredict = async net => {
    await tf.ready();

    const gambar = await camRef.takePictureAsync();

    const img = tf.browser.fromPixels(gambar);
    const resized = tf.image.resizeBilinear(img, [180, 180]);
    const casted = resized.cast("int32");
    const expanded = casted.expandDims(0);

    const obj = net.predict(expanded);
    obj.print();

    console.log(obj.arraySync()[0]);
    const v = tf.tensor(obj.dataSync());
    const vv = v.argMax().dataSync()[0];
    console.log(vv);
    console.log(className[vv]);
    console.log("SKIP-----------------------------------");

    tf.dispose(img);
    tf.dispose(resized);
    tf.dispose(casted);
    tf.dispose(expanded);
    tf.dispose(obj);
  };

  useEffect(() => {
    // runCoco();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {hasil}
        </Text>
      </View>
      {/* <Camera
        style={styles.camera}
        type={Camera.Constants.Type.back}
        ref={camRef}
        ratio={"1:1"}
      /> */}
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
