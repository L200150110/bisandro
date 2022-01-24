import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ItemCard from "./../components/ItemCard";

export default function DictionaryScreen({ route, navigation }) {
  // const [imageLocation, setImageLocation] = useState("");
  // const [videoLocation, setVideoLocation] = useState("");
  let imageLocation =
    "https://bisindo-surakarta.com/uploads/video/kosakata/gambar/";
  let videoLocation =
    "https://bisindo-surakarta.com/uploads/video/kosakata/video/";
  let dataJenis = {};
  let category = route.params.category;
  let imageCategoryLocation = route.params.imageCategoryLocation;

  const getData = jenis => {
    return fetch("https://bisindo-surakarta.com/api/kosakata/get_data/" + jenis)
      .then(response => response.json())
      .then(json => {
        dataJenis[jenis] = pembagi(json.data);
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
    category.forEach(item => {
      getData(item[0]["jenis"]);
      getData(item[1]["jenis"]);
    });
  }, []);

  return (
    <ScrollView style={styles.container}>
      {category
        ? <View style={styles.blockContainer}>
            {category.map((item, index) => {
              return (
                <View style={styles.cardContainer} key={index}>
                  <ItemCard
                    icon={{ uri: imageCategoryLocation + item[0].gambar }}
                    title={item[0].jenis}
                    onPress={() => {
                      navigation.navigate("DetailDictionary", {
                        dataJenis: dataJenis[item[0].jenis],
                        imageLocation: imageLocation,
                        videoLocation: videoLocation
                      });
                    }}
                  />
                  <ItemCard
                    icon={{ uri: imageCategoryLocation + item[1].gambar }}
                    title={item[1].jenis}
                    onPress={() => {
                      navigation.navigate("DetailDictionary", {
                        dataJenis: dataJenis[item[1].jenis],
                        imageLocation: imageLocation,
                        videoLocation: videoLocation
                      });
                    }}
                  />
                </View>
              );
            })}
          </View>
        : <View />}
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
  cardContainer: {
    flexDirection: "row"
  }
});
