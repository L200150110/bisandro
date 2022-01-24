import React, { useState } from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import VideoCard from "./../components/VideoCard";

export default function VideoDictionaryScreen({ route, navigation }) {
  const video = React.useRef(null);
  const [status, setStatus] = useState({});
  let videoUrl = route.params.videoUrl;
  let title = route.params.title;

  return (
    <View style={styles.container}>
      <View style={styles.blockContainer}>
        <VideoCard title={title} videoUrl={videoUrl} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 12.5
  },
  blockContainer: {
    backgroundColor: "#92c5eb",
    borderRadius: 15,
    width: "100%",
    alignItems: "center",
    padding: 12.5,
    marginBottom: 12.5
  }
});
