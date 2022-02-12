import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView
} from "react-native";
import ItemCard from "./../components/ItemCard";
import Button from "./../components/Button";

export default function HomeScreen({ navigation }) {
  const [category, setCategory] = useState(null);
  const [imageCategoryLocation, setImageCategoryLocation] = useState(null);

  const getData = () => {
    return fetch("https://bisindo-surakarta.com/api/kosakata/kategori")
      .then(response => response.json())
      .then(json => {
        setImageCategoryLocation(json.location_image);
        setCategory(pembagi(json.data));
      })
      .catch(err => {
        console.log(err);
      });
  };

  const pembagi = data => {
    var dataTerbagi = [];
    var dataSementara = [];
    data.forEach((item, i) => {
      if (i % 2 === 1 || i === 0) {
        dataSementara.push(item);
        if (i !== 0) {
          dataTerbagi.push(dataSementara);
          dataSementara = [];
        }
      } else {
        dataSementara.push(item);
      }
    });

    return dataTerbagi;
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.blockContainer}>
        <Image
          source={require("../assets/logo/logo-bisandro-3.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.blockContainer}>
        {/* <View style={styles.cardContainer}> */}
        <Button
          icon={require("../assets/icon/icon-design-guide.png")}
          title="Dictionary"
          onPress={() => {
            navigation.navigate("Dictionary", {
              category: category,
              imageCategoryLocation: imageCategoryLocation
            });
          }}
        />
        <Button
          icon={require("../assets/icon/sign-language.png")}
          title="Sign to Text"
          onPress={() => {
            navigation.navigate("Sign To Text");
          }}
        />
        {/* </View> */}
        {/* <View style={styles.cardContainer}> */}
        <Button
          icon={require("../assets/icon/voice-message.png")}
          title="Voice to Sign"
          onPress={() => {
            navigation.navigate("Voice To Sign");
          }}
        />
        <Button
          icon={require("../assets/icon/122932.png")}
          title="Text to Sign"
          onPress={() => {
            navigation.navigate("Text To Sign");
          }}
        />
        {/* </View> */}
        {/* <View style={styles.cardContainer}> */}
        <Button
          icon={require("../assets/icon/images.png")}
          title="Voice to Text"
          onPress={() => {
            navigation.navigate("Voice To Text");
          }}
        />
        <Button
          icon={require("../assets/icon/manual.png")}
          title="Manual"
          onPress={() => {
            navigation.navigate("Manual");
          }}
        />
        {/* </View> */}
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
    backgroundColor: "#f9b218",
    borderRadius: 15,
    width: "100%",
    alignItems: "center",
    padding: 12.5,
    marginBottom: 12.5
  },
  logo: {
    height: 320 / 2,
    width: 304 / 2
  },
  cardContainer: {
    flexDirection: "row"
  }
});
