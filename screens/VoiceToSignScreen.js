import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "./../components/SearchBar";
import HasilScrollView from "./../components/HasilScrollView";
import Voice from "@react-native-voice/voice";

export default function VoiceToSignScreen() {
  const [pitch, setPitch] = useState("");
  const [error, setError] = useState("");
  const [end, setEnd] = useState("");
  const [started, setStarted] = useState("");
  const [results, setResults] = useState([]);
  const [partialResults, setPartialResults] = useState([]);
  const [hasil, setHasil] = useState(null);
  const didMountRef = useRef(false);

  useEffect(() => {
    //Setting callbacks for the process status
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechPartialResults = onSpeechPartialResults;
    Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;

    return () => {
      //destroy the process after switching the screen
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const searchHandler = inputText => {
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

  const onSpeechStart = e => {
    //Invoked when .start() is called without error
    console.log("onSpeechStart: ", e);
    setStarted("√");
  };

  const onSpeechEnd = e => {
    //Invoked when SpeechRecognizer stops recognition
    console.log("onSpeechEnd: ", e);
    setEnd("√");
  };

  const onSpeechError = e => {
    //Invoked when an error occurs.
    console.log("onSpeechError: ", e);
    setError(JSON.stringify(e.error));
  };

  const onSpeechResults = e => {
    //Invoked when SpeechRecognizer is finished recognizing
    console.log("onSpeechResults: ", e);
    setResults(e.value);
    searchHandler(e.value[0]);
  };

  const onSpeechPartialResults = e => {
    //Invoked when any results are computed
    console.log("onSpeechPartialResults: ", e);
    setPartialResults(e.value);
  };

  const onSpeechVolumeChanged = e => {
    //Invoked when pitch that is recognized changed
    // console.log("onSpeechVolumeChanged: ", e);
    setPitch(e.value);
  };

  const startRecognizing = async () => {
    //Starts listening for speech for a specific locale
    try {
      await Voice.start("id");
      setPitch("");
      setError("");
      setStarted("");
      setResults([]);
      setPartialResults([]);
      setEnd("");
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };

  const stopRecognizing = async () => {
    //Stops listening for speech
    try {
      await Voice.stop();
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };

  const cancelRecognizing = async () => {
    //Cancels the speech recognition
    try {
      await Voice.cancel();
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };

  const destroyRecognizer = async () => {
    //Destroys the current SpeechRecognizer instance
    try {
      await Voice.destroy();
      setPitch("");
      setError("");
      setStarted("");
      setResults([]);
      setPartialResults([]);
      setEnd("");
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
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
        value={results[0]}
        editable={false}
        searchHandler={startRecognizing}
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
