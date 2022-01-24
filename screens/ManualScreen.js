import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image
} from "react-native";
import { Avatar, Card, IconButton, Title, Paragraph } from "react-native-paper";
import ItemCard from "./../components/ItemCard";

export default function ManualScreen({ navigation }) {
  const [data, setData] = useState(null);
  const [about, setAbout] = useState(null);

  const getData = () => {
    fetch("http://bisandro.com/api/information/guides")
      .then(response => response.json())
      .then(json => setData(json.data))
      .catch(err => console.log(err));
    fetch("http://bisandro.com/api/information/about")
      .then(response => response.json())
      .then(json => setAbout(json.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.blockContainer}>
        <Image
          source={require("../assets/icon/manual.png")}
          style={styles.logo}
        />
        <Title>Manual</Title>
      </View>
      <View style={styles.blockContainer}>
        <View style={styles.cardContainer}>
          <ItemCard
            icon={require("../assets/icon/icon-design-guide.png")}
            title="Dictionary"
            onPress={() => {
              navigation.navigate("DetailManual", { data: data[0] });
            }}
          />
          <ItemCard
            icon={require("../assets/icon/sign-language.png")}
            title="Sign to Text"
            onPress={() => {
              navigation.navigate("DetailManual", { data: data[1] });
            }}
          />
        </View>
        <View style={styles.cardContainer}>
          <ItemCard
            icon={require("../assets/icon/voice-message.png")}
            title="Voice to Sign"
            onPress={() => {
              navigation.navigate("DetailManual", { data: data[2] });
            }}
          />
          <ItemCard
            icon={require("../assets/icon/122932.png")}
            title="Text to Sign"
            onPress={() => {
              navigation.navigate("DetailManual", { data: data[4] });
            }}
          />
        </View>
        <View style={styles.cardContainer}>
          <ItemCard
            icon={require("../assets/icon/images.png")}
            title="Voice to Text"
            onPress={() => {
              navigation.navigate("DetailManual", { data: data[3] });
            }}
          />
          <ItemCard
            icon={require("../assets/icon/about-us.jpg")}
            title="About Us"
            onPress={() => {
              navigation.navigate("DetailManual", { data: about });
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 12.5,
    marginBottom: 12.5
  },
  blockContainer: {
    backgroundColor: "#92c5eb",
    borderRadius: 15,
    width: "100%",
    alignItems: "center",
    padding: 12.5,
    marginBottom: 12.5
  },
  logo: {
    height: 140,
    width: 140
  },
  cardContainer: {
    flexDirection: "row"
  }
});
