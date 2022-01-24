import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ItemCard from "./../components/ItemCard";

export default function DetailDictionaryScreen({ route, navigation }) {
  let dataJenis = route.params.dataJenis;
  let imageLocation = route.params.imageLocation;
  let videoLocation = route.params.videoLocation;

  return (
    <ScrollView style={styles.container}>
      {dataJenis
        ? <View style={styles.blockContainer}>
            {dataJenis.map((item, index) => {
              return (
                <View style={styles.cardContainer} key={index}>
                  <ItemCard
                    icon={{ uri: imageLocation + item[0].gambar }}
                    title={item[0].nama}
                    onPress={() => {
                      navigation.navigate("VideoDictionary", {
                        title: item[0].nama,
                        videoUrl: videoLocation + item[0].video
                      });
                    }}
                  />
                  <ItemCard
                    icon={{ uri: imageLocation + item[1].gambar }}
                    title={item[1].nama}
                    onPress={() => {
                      navigation.navigate("VideoDictionary", {
                        title: item[1].nama,
                        videoUrl: videoLocation + item[1].video
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
