import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import VideoCard from "./VideoCard";

export default function HasilScrollView({ hasil }) {
  return (
    <ScrollView style={styles.bottomContainer}>
      {hasil
        ? <View style={styles.resultContainer}>
            {hasil.map((item, index) => {
              return (
                <VideoCard title={item.word} videoUrl={item.sign} key={index} />
              );
            })}
          </View>
        : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bottomContainer: {
    width: "100%",
    marginTop: 70,
    padding: 12.5
  },
  resultContainer: {
    backgroundColor: "#f9b218",
    borderRadius: 15,
    alignItems: "center",
    padding: 12.5
  }
});
