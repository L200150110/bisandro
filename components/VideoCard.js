import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { Button, Card, Title, Paragraph } from "react-native-paper";
import VideoPlayer from "react-native-video-player";

export default function VideoCard({ title, videoUrl, ...rest }) {
  const video = React.useRef(null);
  const [status, setStatus] = useState({});

  return (
    <Card style={styles.card}>
      <Card.Content>
        <View style={styles.contentContainer}>
          {videoUrl == "notfound.gif"
            ? <Image
                source={require("./../assets/icon/notfound.png")}
                resizeMode="center"
                style={styles.video}
              />
            : <VideoPlayer
                ref={video}
                style={styles.video}
                video={{ uri: videoUrl }}
                resizeMode="cover"
                autoplay={true}
                disableControlsAutoHide
                repeat={true}
                {...rest}
              />}

          <Text style={styles.title}>
            {title}
          </Text>
        </View>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    width: Dimensions.get("screen").width - 50,
    height: (Dimensions.get("screen").width - 25) / 4 * 3,
    marginBottom: 10
  },
  contentContainer: {
    width: "100%",
    alignItems: "center"
  },
  title: {
    marginTop: 10,
    fontSize: 30
  },
  video: {
    width: 300,
    height: 200
  }
});
