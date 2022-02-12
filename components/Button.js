import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";

export default function Button({ icon, title, ...rest }) {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: "100%",
    margin: 10
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: "contain"
  },
  title: {
    fontSize: 20,
    marginLeft: 15
  }
});
