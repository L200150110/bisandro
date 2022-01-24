import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "./../components/SearchBar";
import HasilScrollView from "./../components/HasilScrollView";

export default function VoiceToSignScreen() {
  const [inputText, setInputText] = useState("");
  const [hasil, setHasil] = useState(null);

  const searchHandler = () => {
    console.log(inputText);
    searchData();
  };

  const searchData = () => {
    if (inputText == "") {
      setHasil(null);
    } else {
      fetch(
        "http://bisandro.com/api/vocabulary/mass/" +
          inputText.replace(/ /g, "_")
      )
        .then(response => response.json())
        .then(json => {
          setHasil(json.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  return (
    <View style={styles.container}>
      <SearchBar
        value={inputText}
        editable={false}
        searchHandler={() => searchHandler()}
        image={require("./../assets/icon/free-microphone.png")}
      />
      <HasilScrollView hasil={hasil} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
