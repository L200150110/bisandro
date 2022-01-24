import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import React from "react";

export default function SearchBar({ searchHandler, image, ...rest }) {
  return (
    <View style={styles.topBar}>
      <View style={styles.searchBarContainer}>
        <TextInput style={styles.searchBar} {...rest} />
      </View>
      <TouchableOpacity
        style={styles.searchButtonContainer}
        onPress={searchHandler}
      >
        <Image source={image} style={styles.searchIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBarContainer: {
    position: "absolute",
    height: 50,
    backgroundColor: "#fff",
    top: 10,
    left: 10,
    right: 70,
    borderRadius: 10
  },
  searchBar: {
    position: "relative",
    height: "100%",
    width: "100%",
    color: "#000",
    marginHorizontal: 10,
    fontSize: 20
  },
  topBar: {
    position: "absolute",
    height: 70,
    top: 0,
    // width: "100%",
    backgroundColor: "#92c5eb",
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    flexDirection: "row",
    left: 12.5,
    right: 12.5
  },
  searchButtonContainer: {
    position: "absolute",
    height: 50,
    width: 50,
    backgroundColor: "#fff",
    right: 10,
    top: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  searchIcon: {
    height: 30,
    width: 30
  }
});
